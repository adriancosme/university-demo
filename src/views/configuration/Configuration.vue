<template>
  <div>
    <Sidebar />
  </div>
</template>

<script>
import {defineComponent} from "vue";
import Sidebar from "../../components/sidebar/Sidebar";

export default defineComponent({
  name: "Configuration",
  components: {
    Sidebar
  },
  setup(){

  }
});
</script>

<style scoped>

</style>
