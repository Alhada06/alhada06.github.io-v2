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
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>
