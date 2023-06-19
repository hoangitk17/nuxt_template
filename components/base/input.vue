<template>
  <input
    type="text"
    :value="modelValue"
    :placeholder="placeholder"
    class="border border-gray-300 rounded-lg w-full p-2 text-black m-1"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>

<script setup>
defineProps({
  modelValue: { typeof: String, default: '' },
  placeholder: { typeof: String, default: '' },
})

defineEmits(['update:modelValue'])
</script>

<script>
export default {
  name: 'MyInput',
}
</script>
