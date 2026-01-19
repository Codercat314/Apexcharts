<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
      <nav>
        <RouterLink to="/">Weather</RouterLink>
        <RouterLink to="/grade">Grade</RouterLink>
      </nav>
  </header>
  <RouterView/>

</template>

<style scoped>

</style>
