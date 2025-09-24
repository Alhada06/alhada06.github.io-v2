import { tsParticles } from "@tsparticles/engine";
import { loadFull } from "tsparticles";
export default defineNuxtPlugin(async () => {
  await loadFull(tsParticles);
});
