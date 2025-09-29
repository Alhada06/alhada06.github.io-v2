<script setup lang="ts">

import {en,pt}  from '@nuxt/ui/locale'
const nuxtApp = useNuxtApp()
const { activeHeadings, updateHeadings } = useScrollspy()


const { locale, setLocale } = useI18n()

const items = computed(() => [{
  label: $t('Section 1'),
  to: '#section1',
  active: activeHeadings.value.includes('section1') && !activeHeadings.value.includes('section2')
}, {
  label: $t('Section 2'),
  to: '#section2',
  active: activeHeadings.value.includes('section2') && !activeHeadings.value.includes('section3')
}, {
  label: $t('Section 3'),
  to: '#section3',
  active: activeHeadings.value.includes('section3') && !activeHeadings.value.includes('section4')
}, {
  label: $t('Section 4'),
  to: '#section4',
  active: activeHeadings.value.includes('section4') && !activeHeadings.value.includes('section5')
}, {
  label: $t('Section 5'),
  to: '#section5',
  active: activeHeadings.value.includes('section5') && !activeHeadings.value.includes('section6')
},])

nuxtApp.hooks.hookOnce('page:finish', () => {
  updateHeadings([
    document.querySelector('#section1'),
    document.querySelector('#section2'),
    document.querySelector('#section3'),
    document.querySelector('#section4'),
    document.querySelector('#section5'),
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

      <!-- <UButton label="Download App" variant="subtle" class="hidden lg:block" /> -->
      <ULocaleSelect
        v-model="locale"
        :locales="Object.values([en, pt])"
        @update:model-value="setLocale($event)"
      />
      <UColorModeButton />
    </template>

    <template #body>
      <UNavigationMenu :items="items" orientation="vertical" class="-mx-2.5" />
      <!-- <UButton class="mt-4" label="Download App" variant="subtle" block /> -->
    </template>
  </UHeader>
</template>
