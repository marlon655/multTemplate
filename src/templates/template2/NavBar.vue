<template>
    <span>Template 2</span>
      <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/sobre">Sobre</router-link>
        <router-link to="/contato">Contato</router-link>
      </nav>
    <router-view/>
</template>
<script>

</script>
<style>
nav a {
  font-weight: bold;
}
</style>