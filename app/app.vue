<script setup lang="ts">
import  * as locales  from '@nuxt/ui/locale';
import skillsQuery from "@/graphql/queries/skills.query.gql";
import aboutQuery from "@/graphql/queries/about.query.gql";

//  const {clients} = useApollo();
const {locale} = useI18n();
const{data}= useAsyncQuery(skillsQuery,()=>{
  return {locale: locale.value};
  },);

  const skills = computed(() => data.value?.skillCollection?.items || []);

const {result:aboutData,loading}= useQuery(aboutQuery,()=>{
  return {locale: locale.value} ;
});

  const about = computed(() => aboutData.value?.about?.description);
</script>
\
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
        <!-- <div>{{ skills }}</div>

        <div class="p-4 space-y-4">
          locale:{{ locale}}

          lang change test:{{ $t('test') }}
        </div>
        <div class="p-4 space-y-4">about:{{ about}} loading:{{ loading}}</div> -->

        <section
          id="1"
          class="m-4 mb-10 ml-4 mr-5  h-64 rounded-bl-3xl rounded-tr-3xl border-slate-400 bg-slate-300/30 p-4 shadow-inner shadow-blue-900/25 backdrop-blur-sm dark:border-bgbluelighter dark:bg-bgbluelighter/40 dark:shadow-white/25 md:p-8 lg:m-4"
        >
          Section 1 ----------------------------------------
          --------------------------------
          ---------------------------------------- -
          ----------------------------------------------
          --------------------------------------------
        </section>
        <section
          id="section2"
          class="m-4 mb-10 ml-4 mr-5 h-64 rounded-bl-3xl rounded-tr-3xl border-slate-400 bg-slate-300/30 p-4 shadow-inner shadow-blue-900/25 backdrop-blur-sm dark:border-bgbluelighter dark:bg-bgbluelighter/40 dark:shadow-white/25 md:p-8 lg:m-4"
        >
          Section 2 ----------------------------------------
          --------------------------------
          ---------------------------------------- -
          ----------------------------------------------
          --------------------------------------------
        </section>
        <section
          id="section3"
          class="m-4 mb-10 ml-4 mr-5 h-64 rounded-bl-3xl rounded-tr-3xl border-slate-400 bg-slate-300/30 p-4 shadow-inner shadow-blue-900/25 backdrop-blur-sm dark:border-bgbluelighter dark:bg-bgbluelighter/40 dark:shadow-white/25 md:p-8 lg:m-4"
        >
          Section 3 ----------------------------------------
          --------------------------------
          ---------------------------------------- -
          ----------------------------------------------
          --------------------------------------------
        </section>
        <section
          id="section4"
          class="m-4 mb-10 ml-4 mr-5 h-64 rounded-bl-3xl rounded-tr-3xl border-slate-400 bg-slate-300/30 p-4 shadow-inner shadow-blue-900/25 backdrop-blur-sm dark:border-bgbluelighter dark:bg-bgbluelighter/40 dark:shadow-white/25 md:p-8 lg:m-4"
        >
          Section 4 ----------------------------------------
          --------------------------------
          ---------------------------------------- -
          ----------------------------------------------
          --------------------------------------------
        </section>
        <section
          id="section5"
          class="m-4 mb-10 ml-4 mr-5 h-64 rounded-bl-3xl rounded-tr-3xl border-slate-400 bg-slate-300/30 p-4 shadow-inner shadow-blue-900/25 backdrop-blur-sm dark:border-bgbluelighter dark:bg-bgbluelighter/40 dark:shadow-white/25 md:p-8 lg:m-4"
        >
          Section 5 ----------------------------------------
          --------------------------------
          ---------------------------------------- -
          ----------------------------------------------
          --------------------------------------------
        </section>
      </div>
    </NuxtLayout>
  </UApp>
</template>
