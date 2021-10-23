<template>
  <table class="min-w-full leading-normal">
    <tr>
      <th class="text-secondary text-sm font-bold uppercase px-2" v-for="(header, index) in headers" :key="index">{{header.text}}</th>
      <th class="text-secondary text-sm font-bold uppercase px-2">
        <slot name="headerAction"></slot>
      </th>
    </tr>
    <tr v-for="(data, dataIndex) in items" :key="dataIndex" v-bind:item="data">
      <slot :item="data"></slot>
    </tr>
  </table>
</template>

<script lang="ts">
import {defineComponent, PropType} from "vue";

export type TableHeader = {
  text: string;
  value: string;
}

export default defineComponent({
  name: "DataTable",
  props: {
    headers: {
      type: Array as PropType<TableHeader[]>,
      required: true
    },
    items: {
      type: Array,
      required: true
    }
  },
  setup(){

  },
})
</script>

<style scoped>

</style>