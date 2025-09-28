<script setup lang="ts">

import {en,pt}  from '@nuxt/ui/locale'
const nuxtApp = useNuxtApp()
const { activeHeadings, updateHeadings } = useScrollspy()


const { locale, setLocale } = useI18n()

const items = computed(() => [{
  label: 'Features',
  to: '#features',
  active: activeHeadings.value.includes('features') && !activeHeadings.value.includes('pricing')
}, {
  label: 'Pricing',
  to: '#pricing',
  active: activeHeadings.value.includes('pricing')
}, {
  label: 'Testimonials',
  to: '#testimonials',
  active: activeHeadings.value.includes('testimonials') && !activeHeadings.value.includes('pricing')
}])

nuxtApp.hooks.hookOnce('page:finish', () => {
  updateHeadings([
    document.querySelector('#features'),
    document.querySelector('#pricing'),
    document.querySelector('#testimonials')
  ].filter(Boolean) as Element[])
})
</script>

<template>
  <UHeader title="DA" mode="slideover">
    <template #left>
      <NuxtLink to="/">
        <h1 class="w-auto h-6 shrink-0">DA</h1>
      </NuxtLink>
    </template>

    <template #right>
      <UNavigationMenu :items="items" variant="link" class="hidden lg:block" />

      <UButton label="Download App" variant="subtle" class="hidden lg:block" />
      <ULocaleSelect
        v-model="locale"
        :locales="Object.values([en, pt])"
        @update:model-value="setLocale($event)"
      />
      <UColorModeButton />
    </template>

    <template #body>
      <UNavigationMenu :items="items" orientation="vertical" class="-mx-2.5" />
      <UButton class="mt-4" label="Download App" variant="subtle" block />
    </template>
  </UHeader>
</template>
