<script setup lang="ts">
import type { ISourceOptions, Container } from "@tsparticles/engine";

const coloMode= useColorMode();
// console.log(coloMode.value)
 const particlesContainer = ref<Container | undefined>(undefined);
 const particlesLoaded = (container?: Container) => {
    container?.loadTheme(coloMode.value );
   particlesContainer.value = container;
   console.log("trigrred load particles", new Date());
 };
  // const x = useCssVar(ref("--color-neutral-200"),ref(null));

// console.log("x", x.value, x.value ? oklchToHex(x.value) : undefined);
// console.log(oklchToHex(useCssVar(ref("--color-neutral-200"),ref(null)).value ?? ""));


const options: ISourceOptions = {
  themes: [
    {
      name: "dark",
      default: {
        value: true,
        mode: "dark",
      },
      options: {

        particles: {
          color: {
            value: oklchToHex(useCssVar(ref("--color-neutral-100"),ref(null)).value ?? "oklch(0.278078 0.029596 256.848)"),
          },
          links: {
            color: oklchToHex(useCssVar(ref("--color-neutral-200"),ref(null)).value ?? "oklch(0.278078 0.029596 256.848)"),
          },
        },
      },
    },
    {
      name: "light",
      default: {
        value: true,
        mode: "light",
      },
      options: {

        particles: {
          color: {
            value: oklchToHex(useCssVar(ref("--color-blue-900"),ref(null)).value ?? "oklch(0.278078 0.029596 256.848)"),
          },
          links: {
            color: oklchToHex(useCssVar(ref("--color-blue-800"),ref(null)).value ?? "oklch(0.278078 0.029596 256.848)"),
          },
        },
      },
    },
  ],

  fullScreen: {
    enable: true,
    zIndex: -1,
  },
  fpsLimit: 60,
  interactivity: {
    detectsOn: "window",
    events: {
      onClick: {
        enable: true,
        mode: "push",
      },
      onHover: {
        enable: true,
        mode: "grab",
      },
      // resize: true,
    },
    modes: {
      bubble: {
        distance: 400,
        duration: 2,
        opacity: 0.8,
        size: 40,
      },
      push: {
        quantity: 4,
        duration: 0.2,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
    },
  },
  particles: {
    links: {
      distance: 150,
      enable: true,
      opacity: 0.5,
      width: 1,
    },
    collisions: {
      enable: true,
    },
    move: {
      direction: "none",
      enable: true,
      outModes: "out",
      random: false,
      speed: 2,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        // value_area: 1000,
      },
      value: 100,
    },
    opacity: {
      value: 0.5,
    },
    shape: {
      type: "circle",
    },
    size: {
      // random: true,
      value: 3,
    },
  },
  detectRetina: true,
};
</script>

<template>
  <div>
    <ClientOnly>
      <LazyTheParticles
        id="tsparticles"
        :options="options"
        :theme="coloMode.value"
        @particles-loaded="particlesLoaded"
      />
    </ClientOnly>
    <slot />
  </div>
</template>

<style scoped></style>
