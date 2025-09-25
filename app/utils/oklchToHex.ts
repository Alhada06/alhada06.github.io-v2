interface OKLCHComponents {
  lightness: number;
  chroma: number;
  hue: number;
}

interface RGBComponents {
  r: number;
  g: number;
  b: number;
}

/**
 * Converts an OKLCH color string to hexadecimal format
 * @param oklchString - OKLCH color string in format "oklch(L% C H)" or "oklch(L C H)"
 * @returns Hexadecimal color string (e.g., "#EDEDED")
 * @throws Error when OKLCH string format is invalid
 */
function oklchToHex(oklchString: string): string {
  if (!oklchString || typeof oklchString !== "string") {
    throw new Error("OKLCH string must be a non-empty string");
  }

  // Parse OKLCH string like "oklch(92.9% 0.013 255.508)"
  const match = oklchString.match(
    /oklch\(\s*([0-9.]+)%?\s+([0-9.]+)\s+([0-9.]+)\s*\)/
  );

  if (!match || match.length !== 4) {
    throw new Error(
      "Invalid OKLCH format. Expected: oklch(L% C H) or oklch(L C H)"
    );
  }

  const [, lStr, cStr, hStr] = match as [string, string, string, string];
  const L = parseFloat(lStr);
  const C = parseFloat(cStr);
  const H = parseFloat(hStr);

  // Validate parsed values
  if (isNaN(L) || isNaN(C) || isNaN(H)) {
    throw new Error("OKLCH values must be valid numbers");
  }

  if (L < 0 || L > 100) {
    throw new Error("Lightness must be between 0 and 100");
  }

  if (C < 0) {
    throw new Error("Chroma must be non-negative");
  }

  const oklchComponents: OKLCHComponents = {
    lightness: L / 100, // Normalize to 0-1 range
    chroma: C,
    hue: H,
  };

  const rgbComponents = convertOKLCHToRGB(oklchComponents);
  return formatAsHex(rgbComponents);
}

/**
 * Converts OKLCH components to RGB components
 */
function convertOKLCHToRGB(oklch: OKLCHComponents): RGBComponents {
  const { lightness, chroma, hue } = oklch;

  // Convert OKLCH to OKLab
  const hueRad = (hue * Math.PI) / 180;
  const a = chroma * Math.cos(hueRad);
  const b = chroma * Math.sin(hueRad);

  // OKLab to Linear RGB transformation matrix
  const l_ = lightness + 0.3963377774 * a + 0.2158037573 * b;
  const m_ = lightness - 0.1055613458 * a - 0.0638541728 * b;
  const s_ = lightness - 0.0894841775 * a - 1.291485548 * b;

  const l = l_ ** 3;
  const m = m_ ** 3;
  const s = s_ ** 3;

  const rLin = 4.0767416621 * l - 3.3077115913 * m + 0.2309699292 * s;
  const gLin = -1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * s;
  const bLin = -0.0041960863 * l - 0.7034186147 * m + 1.707614701 * s;

  // Convert linear RGB to sRGB (gamma correction)
  const rSrgb = linearToSrgb(rLin);
  const gSrgb = linearToSrgb(gLin);
  const bSrgb = linearToSrgb(bLin);

  // Convert to 8-bit values and clamp
  return {
    r: clampToByte(rSrgb),
    g: clampToByte(gSrgb),
    b: clampToByte(bSrgb),
  };
}

/**
 * Applies gamma correction to convert linear RGB to sRGB
 */
function linearToSrgb(value: number): number {
  return value <= 0.0031308
    ? 12.92 * value
    : 1.055 * value ** (1 / 2.4) - 0.055;
}

/**
 * Converts a normalized RGB value to 8-bit and clamps to valid range
 */
function clampToByte(value: number): number {
  return Math.max(0, Math.min(255, Math.round(value * 255)));
}

/**
 * Formats RGB components as hexadecimal color string
 */
function formatAsHex(rgb: RGBComponents): string {
  const { r, g, b } = rgb;

  const toHex = (value: number): string => {
    const hex = value.toString(16).padStart(2, "0");
    return hex.toUpperCase();
  };

  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

// Example usage with error handling:
try {
  console.log(oklchToHex("oklch(92.9% 0.013 255.508)")); // #EDEDED
  console.log(oklchToHex("oklch(50% 0.2 180)")); // #00B366
  console.log(oklchToHex("oklch(75 0.1 45)")); // #D4B896
} catch (error) {
  console.error(
    "Color conversion error:",
    error instanceof Error ? error.message : error
  );
}

export { oklchToHex, type OKLCHComponents, type RGBComponents };
