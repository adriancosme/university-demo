<template>
    <button class="py-2 px-4 font-semibold rounded-lg mx-4" :class="{'bg-primary-background text-white': isPrimary, 'bg-white text-primary': isSecondary}">
      <slot></slot>
    </button>
</template>

<script lang="ts">
import {computed, defineComponent, PropType} from "vue";
export default defineComponent({
  name: "Button",
  props: {
    variant: {
      type: String as PropType<String>,
      required: false,
      default: 'primary'
    }
  },
  setup(props){
    const isPrimary = computed(() => props.variant === 'primary');
    const isSecondary = computed(() => props.variant === 'secondary');
    return {isPrimary, isSecondary}
  }
})
</script>

<style scoped>

</style>