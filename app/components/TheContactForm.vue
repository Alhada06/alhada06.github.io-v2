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
const { r$ } = useRegle({ email: '', message: '', name: '' }, {
  name: { required, minLength:withMessage(minLength(3), ()=>$t('min-length', { num: 3 }))},
  email: { required, email: withMessage(email, ()=>$t('invalid-email')) },
  message: { required, minLength: withMessage(minLength(10), ()=>$t('min-length', { num: 10 })) }
})

type Schema = InferInput<typeof r$>
  // console.log(r$)

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
    <div class="flex flex-row justify-center w-full">
      <UForm
        :schema="r$"
        :state="r$.$value"
        class="space-y-4"
        @submit="onSubmit"
      >
        <UFormField :label="$t('name')" name="name">
          <UInput v-model="r$.$value.name" />
        </UFormField>
        <UFormField label="Email" name="email">
          <UInput v-model="r$.$value.email" />
        </UFormField>

        <UFormField :label="$t('message')" name="message">
          <UTextarea v-model="r$.$value.message" autoresize />
        </UFormField>

        <UButton type="submit"> {{ t('send') }} </UButton>
      </UForm>
    </div>
  </UPageCard>
</template>

<style scoped></style>
