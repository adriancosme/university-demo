<template>
  <label :for="label" class="text-lg text-left font-semibold text-gray-500 my-2">{{ label }}</label>
  <input class="border-2 w-full rounded border-gray-200 py-2 px-4" v-bind="$attrs" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" :id="label" :name="label">
</template>

<script lang="ts">
import {computed, defineComponent} from "vue";

export default defineComponent({
  name: "Input",
  props: ['modelValue', 'label', 'value'],
  emits: ['update:modelValue'],
  setup(props) {
    const name = computed(() => props.label.toLowerCase());
    return {name}
  }
})
</script>

<style scoped>

</style>