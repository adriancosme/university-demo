<template>
  <div class="flex w-full min-h-screen">
    <div class="w-1/2 flex flex-col ml-28 my-10">
      <div class="flex flex-row">
        <img src="../../assets/logo-school.png" alt="Logo">
      </div>
      <div class="flex flex-row justify-start my-5">
        <h1 class="text-2xl font-bold text-gray-700">Inicia sesión</h1>
      </div>
      <div class="flex flex-col w-9/12 items-start">
        <Input label="Usuario" v-model="username"/>
        <Input label="Contraseña" type="password" v-model="password"/>
        <button class="py-2 px-4 w-full text-white font-semibold bg-btn-login rounded-lg shadow-md my-3" @click="login">
          Iniciar sesión
        </button>
      </div>
    </div>
    <div class="w-1/2 bg-primary-background">
      <img src="../../assets/Documents-bro.png" alt="Documents">
    </div>
  </div>
</template>

<script lang="ts">
import {ref} from "vue";
import Input from "@/components/common/Input.vue";
import {authenticate} from "@/services/auth.service";
import {createToast} from 'mosha-vue-toastify';
import 'mosha-vue-toastify/dist/style.css'

export default {
  name: "Login",
  components: {
    Input,
  },
  setup() {
    const username = ref<string>('');
    const password = ref<string>('');

    const login = async () => {
      try {
        const auth = await authenticate({username: username.value, password: password.value});
        localStorage.setItem('token', auth.data.accessToken);
        localStorage.setItem('userId', auth.data.user.id);
        localStorage.setItem('user-name', auth.data.user.profile.name);
        localStorage.setItem('role', auth.data.user.roles);
        window.location.href = '/reports'
        createToast('Sesion iniciada', {type: 'success'});
      } catch (e) {
        createToast(e.message, {type: 'warning'})
      }
    }
    return {
      username,
      password,
      login
    }
  }
};
</script>

<style scoped>

</style>
