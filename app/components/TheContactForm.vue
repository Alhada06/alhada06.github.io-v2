<script setup lang="ts">
  import {  type InferInput,defineRegleConfig } from '@regle/core'
import { required, email, minLength, withMessage } from '@regle/rules'
import type { FormSubmitEvent } from '@nuxt/ui'

 const { t } = useI18n();
 const{useRegle}=defineRegleConfig({
  rules: ()=>({
    required: withMessage(required, ()=>$t('required')),
  })
 });
const { r$ } = useRegle({ email: '', password: '' }, {
  email: { required, email: withMessage(email, $t('invalid-email')) },
  password: { required, minLength: withMessage(minLength(8), 'Must be at least 8 characters') }
})

type Schema = InferInput<typeof r$>
  console.log(r$)

const toast = useToast()
async function onSubmit(event: FormSubmitEvent<Schema>) {
  toast.add({ title: 'Success', description: 'The form has been submitted.', color: 'success' })
  console.log(event.data)
}
</script>

<template>
  <UPageCard
    variant="outline"
    :title="$t('contact-me')"
    :description="$t('contact-me')"
    orientation="vertical"
  >
    <UForm :schema="r$" :state="r$.$value" class="space-y-4" @submit="onSubmit">
      <UFormField label="Email" name="email">
        <UInput v-model="r$.$value.email" />
      </UFormField>

      <UFormField label="Password" name="password">
        <UInput v-model="r$.$value.password" type="password" />
      </UFormField>

      <UButton type="submit"> {{ t('send') }} </UButton>
    </UForm>
  </UPageCard>
</template>

<style scoped></style>
