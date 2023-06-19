<template>
  <div class="p-4">
    Custom layout defined with <code>definePageMeta</code>
    <BaseInput model-value="test" />
    <div>
      {{ foo }}
    </div>
  </div>
</template>

<script setup>
import { useLoadingStore } from '@/store/loading'
import cloneDeep from 'lodash.clonedeep';
const foo = useFoo()
const copy = cloneDeep(foo);
console.log(copy)
definePageMeta({
  layout: 'admin',
})
const store = useLoadingStore()
const config = useRuntimeConfig()
console.log(store, config)
</script>
