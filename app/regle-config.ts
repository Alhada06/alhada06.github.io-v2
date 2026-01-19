import { defineRegleNuxtPlugin } from "@regle/nuxt/setup";
import { defineRegleConfig } from "@regle/core";
import { required, withMessage } from "@regle/rules";
console.log("i18n t function available in Regle config");

export default defineRegleNuxtPlugin(() => {
  return defineRegleConfig({
    rules: () => {
      // Your custom rules here
      return {
        required: withMessage(required, "working!"),
      };
    },
  });
});
