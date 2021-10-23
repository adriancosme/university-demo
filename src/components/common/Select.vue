<template>
  <label :for="label" class="text-lg text-left font-semibold text-gray-500 my-2">{{ label }}</label>
  <select class="border-2 w-full rounded border-gray-200 py-2 px-4" :id="label" :name="label" v-bind="$attrs"  :value="modelValue" @input="$emit('update:modelValue', $event.target.value)">
    <option v-for="(item, index) in items" :value="item.value" :key="index">{{ item.text }}</option>
  </select>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: "Select",
  props: ['modelValue', 'label', 'items'],
  emits: ['update:modelValue'],
})
</script>

<style scoped>

</style>