import { tsParticles } from "@tsparticles/engine";
// import { loadFull } from "tsparticles";
import { loadSlim } from "@tsparticles/slim";
export default defineNuxtPlugin(async () => {
  await loadSlim(tsParticles);
});
