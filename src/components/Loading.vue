<template>
<div class="spinner"></div>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: "Loading"
})
</script>

<style scoped>
.spinner{
  border: 4px solid  rgba(0,0,0, .1);
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border-left-color: #28ABE7;
;
  animation: spin 1s linear infinite;
}
@keyframes spin {
  0%{
    transform: rotate(0deg);
  }
  100%{
    transform: rotate(360deg);
  }
}
</style>