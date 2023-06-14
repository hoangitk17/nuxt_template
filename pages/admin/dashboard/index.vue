<template>
  <div class="p-4">
    Custom layout defined with <code>definePageMeta</code>
  </div>
</template>

<script setup>
import { useLoadingStore } from "@/store/loading";
definePageMeta({
  layout: 'admin'
})
const store = useLoadingStore();
const config = useRuntimeConfig()
console.log(store, config);
</script>
