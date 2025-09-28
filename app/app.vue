<script setup lang="ts">
import  * as locales  from '@nuxt/ui/locale';
import skillsQuery from "@/graphql/queries/skills.query.gql";
import aboutQuery from "@/graphql/queries/about.query.gql";

 const {clients} = useApollo();
const {locale} = useI18n();
const{data}= useAsyncQuery(skillsQuery,()=>{
  return {locale: locale.value};
  },);

  const skills = computed(() => data.value?.skillCollection?.items || []);

const {data:aboutData}= useAsyncQuery({query:aboutQuery,variables:{locale:()=>locale.value}});
  const about = computed(() => aboutData.value?.about?.description);
</script>

<template>
  <UApp :locale="locales[locale]">
    <NuxtLayout>
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
        <div>{{ skills }}</div>

        <div class="p-4 space-y-4">
          locale:{{ locale}}

          lang change test:{{ $t('test') }}
        </div>
        <div class="p-4 space-y-4">about:{{ about}}</div>
      </div>
    </NuxtLayout>
  </UApp>
</template>
