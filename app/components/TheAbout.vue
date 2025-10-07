<template>
  <UPageCard
    variant="outline"
    title="About Me"
    :description="about"
    orientation="vertical"
  />
</template>

<script lang="ts" setup>
import aboutQuery from "@/graphql/queries/about.query.gql";
 const {locale} = useI18n();

console.log(locale.value);


 const variable = computed(() => ({locale: locale.value}));
const {result:aboutData}=  useQuery(aboutQuery,variable);
const about = computed(() => aboutData.value?.about?.description);
</script>
