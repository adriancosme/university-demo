<template>
  <router-link :to="to" class="relative flex flex-row items-center h-11 text-white-600 pr-6 my-3" active-class="bg-white rounded">
    <span class="inline-flex justify-center items-center ml-4">
      <img :class="{image: !isActive}" class="w-6" :src="require(`../../assets/${icon}`)" alt="Icono">
    </span>
    <span :class="{'text-black': isActive}" class="ml-2 text-sm font-semibold tracking-wide truncate">{{name}}</span>
  </router-link>
</template>

<script lang="ts">
import {computed, defineComponent, PropType} from "vue";
import {useRoute} from "vue-router";

export default defineComponent({
  name: "SidebarLink",
  props: {
    to: {type: String as PropType<String>, required: true},
    name: {type: String as PropType<String>, required: true},
    icon: {type: String as PropType<String>, required: true},
  },
  setup(props){
    const route  = useRoute();
    const isActive = computed(() => route.path === props.to)
    return {isActive}
  }
});
</script>

<style scoped>
.image {
  filter: brightness(0) invert(1);
}
</style>

