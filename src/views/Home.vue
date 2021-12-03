<template>
  <div class="home">
    <div class="flexWrapper">
      <img alt="Vue logo" src="../assets/logo.png" class="img_logo">
      <h4>Todo App (Vue 3 + Vuex + TypeScript)</h4>
    </div>
    <form method="POST" @submit.prevent="" class="flexWrapper formContainer">
      <input type="text">
      <button type="submit">+ ADD</button>
    </form>
    <HelloWorld />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HelloWorld from '@/components/HelloWorld.vue' // @ is an alias to /src

export default defineComponent({
  name: 'Home',
  components: {
    HelloWorld
  }
})
</script>

<style>
.home {
  margin-top: 2rem;
}
.flexWrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}
.img_logo {
  width: 3rem;
}
.formContainer {
  margin: auto;
  width: 20rem;
}
input[type=text], select {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

input[type=submit] {
  width: 100%;
  background-color: #4CAF50;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

input[type=submit]:hover {
  background-color: #45a049;
}
</style>
