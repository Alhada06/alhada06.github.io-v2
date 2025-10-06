<template>
  <UPageCard
    variant="outline"
    :title="$t('about')"
    :description="about"
    spotlight
    spotlight-color="secondary"
    orientation="vertical"
  />
</template>

<script lang="ts" setup>
import aboutQuery from "@/graphql/queries/about.query.gql";
 const {locale} = useI18n();
const {result:aboutData}= useQuery(aboutQuery,()=>{
  return {locale: locale.value} ;
});
const about = computed(() => aboutData.value?.about?.description);
</script>
