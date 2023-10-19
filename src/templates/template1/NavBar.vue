<template>
  <div class="header">
    <div class="center">

      <div class="header-content">
        <div class="box-logo">
          <router-link to="/">
            <img src="@/assets/templateOne.png">
          </router-link>
        </div>

        <div class="search">
          <input type="text" placeholder="Faça sua pesquisa...">
          <button class="btn-search">
            <font-awesome-icon :icon="['fas', 'magnifying-glass']" class="lupa" />
          </button>
        </div>
      </div>

    </div>
  </div>
  <nav>
    <div class="center">
      <router-link to="/">Home</router-link>
      <router-link to="/sobre">Sobre</router-link>
      <router-link to="/contato">Contato</router-link>
    </div>
  </nav>
  <div class="center">
    <router-view />
  </div>

  <Footer />

</template>

<script>
import Footer from "./footer.vue";
export default {
  components: { Footer }
}
</script>
<style scoped>
* {
  margin: 0;
  box-sizing: border-box;
}

.icon {
  font-size: 50px;
}

.center {
  margin: 0 auto;
  max-width: 1280px;
  width: 100%;
  padding: 0 2%;
}

.header {
  padding: 10px;
  background-color: #AEFEAB;
  width: 100%;
}

.box-logo {
  width: 100%;
  max-width: 200px;
  height: 60px;
}

.box-logo img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.header-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.search {
  padding-left: 50px;
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 350px;
}

.search input[type='text'] {
  border: 1px solid #ccc;
  border-bottom-left-radius: 10px;
  border-top-left-radius: 10px;
  padding-left: 5px;
  max-width: 300px;
  width: 100%;
  height: 40px;
  font-size: 16px;
  color: #ccc;
  outline: none;
}

.btn-search {
  border-bottom-right-radius: 10px;
  border-top-right-radius: 10px;
  width: 50px;
  height: 40px;
  cursor: pointer;
  background-color: #00A470;
  text-decoration: none;
  border: none;
  transition: 0.5s;
}

.btn-search:hover {
  background-color: #00e39b;
}

.lupa {
  color: beige;
  font-size: 20px;
}

nav {
  width: 100%;
  background-color: #00A470;
  padding: 5px 0;
}

nav a {
  padding: 0 10px;
  color: white;
  text-decoration: none;

}</style>