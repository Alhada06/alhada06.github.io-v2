<template>
  <div>
    <!-- <NuxtRouteAnnouncer />
      <NuxtWelcome /> -->
    <!-- <UColorModeButton /> -->
    <!-- <ClientOnly>
        <LazyTheParticles
          id="tsparticles"
          :options="options"
          :theme="coloMode.value"
          @particles-loaded="particlesLoaded"
        />
      </ClientOnly> -->
    <!-- <div>{{ skills }}</div>

        <div class="p-4 space-y-4">
          locale:{{ locale}}

          lang change test:{{ $t('test') }}
        </div>
        <div class="p-4 space-y-4">about:{{ about}} loading:{{ loading}}</div> -->

    <UPageSection class="w-full h-full" id="1">
      <TheAbout />
    </UPageSection>
    <UPageSection id="section2">
      <TheAbout />
    </UPageSection>
    <UPageSection id="section3">
      <TheAbout />
    </UPageSection>
    <UPageSection id="section4">
      <TheAbout />
    </UPageSection>
    <UPageSection id="section5">
      <UPageCard
        variant="outline"
        spotlight
        spotlight-color="secondary"
        orientation="horizontal"
      >
        Section 5 ----------------------------------------
        --------------------------------
        ---------------------------------------- -
        ----------------------------------------------
        --------------------------------------------</UPageCard
      >
    </UPageSection>
  </div>
</template>

<script lang="ts" setup></script>

<style></style>
