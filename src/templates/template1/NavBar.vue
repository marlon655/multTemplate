<template>
  <div class="header">
    <div class="center">

      <div class="header-desktop">
        <div class="box-logo">
          <router-link to="/">
            <img src="@/assets/templateOne.png">
          </router-link>
        </div>

        <div class="search">
          <input type="text" placeholder="Oque você procura hoje?">
          <button class="btn-search">
            <font-awesome-icon :icon="['fas', 'magnifying-glass']" class="lupa" />
          </button>
        </div>

        <div class="account-cart-desktop">
          <button class="account-desktop">
            <span>Minha Conta</span>
            <font-awesome-icon :icon="['fas', 'house']" />
          </button>

          <router-link to="/sacola">
            <button class="cart">
              <span class="qt-in-cart">{{ sharedModule }}</span>
              <font-awesome-icon :icon="['fas', 'cart-shopping']" />
            </button>
          </router-link>
        </div>

      </div>

      <div class="is-mobile">
        <div class="top-header">
          <button class="menu-btn">
            <font-awesome-icon :icon="['fas', 'bars']" />
          </button>

          <div class="box-logo">
            <router-link to="/">
              <img src="@/assets/templateOne.png">
            </router-link>
          </div>

          <router-link to="/sacola">
            <button class="cart">
              <span class="qt-in-cart">{{ sharedModule }}</span>
              <font-awesome-icon :icon="['fas', 'cart-shopping']" />
            </button>
          </router-link>
        </div>

        <div class="search">
          <input type="text" placeholder="Oque você procura hoje?">
          <button class="btn-search">
            <font-awesome-icon :icon="['fas', 'magnifying-glass']" class="lupa" />
          </button>
        </div>
      </div>

    </div>
  </div>
  <nav class="menu-desktop">
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
import sharedModule from '../../sharedModule';
import Footer from "./footer.vue";
export default {
  components: { Footer },
  data() {
    return {
      itens: [],
      totalItens: 0,
    }
  },
  created() {
    const storage = localStorage.getItem('cart');
    this.totalItens = 0;
    if (storage) {
      this.itens = JSON.parse(storage);
      this.itens.forEach(el => {
        this.totalItens += el.quantity;
      });
      sharedModule.itensInBag = this.totalItens;
    }
  },
  computed: {
    sharedModule() {
      return sharedModule.itensInBag;
    }
  }
}
</script>
<style scoped>
* {
  margin: 0;
  box-sizing: border-box;
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

/* DESKTOP-HEADER */
.box-logo {
  width: 100%;
  max-width: 200px;
  height: 60px;
}

.box-logo img {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: contain;
}

.header-desktop {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.search {
  padding-left: 50px;
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 500px;
}

.search input[type='text'] {
  border: 1px solid #ccc;
  border-bottom-left-radius: 10px;
  border-top-left-radius: 10px;
  padding-left: 5px;
  width: 100%;
  height: 40px;
  font-size: 18px;
  color: #000000;
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

.cart {
  background-color: #00a470;
  border: 2px solid #005e40;
  border-radius: 10px;
  font-size: 32px;
  color: #AEFEAB;
  width: 48px;
  height: 48px;
  min-width: 48px;
  min-height: 48px;
  cursor: pointer;
  position: relative;
}

.qt-in-cart {
  font-size: 18px;
  width: 42px;
  border-radius: 10px;
  position: absolute;
  color: #00442F;
  top: -10px;
  right: -22px;
  background-color: #00C587;
}

.cart:hover {
  background-color: #00C587;
}

.icon {
  font-size: 50px;
}

.account-cart-desktop {
  padding-left: 20px;
  min-width: 230px;
  display: flex;
  justify-content: space-between;
}

.account-desktop {
  border: none;
  background-color: transparent;
  color: #00442F;
  font-size: 18px;
  cursor: pointer;
  min-width: 140px;
}

.account-desktop span {
  padding-right: 10px;

}

.account-desktop:hover {
  text-decoration: underline;
}

nav {
  width: 100%;
  background-color: #00A470;
  padding: 5px 0;
}

nav a {
  padding: 0 10px;
  color: white;
  font-size: 18px;
  text-decoration: none;

}

/* MOBILE-HEADER */
.is-mobile {
  display: none;
  /* justify-content: space-between;
  align-items: center; */
}

.top-header {
  display: none;
  justify-content: space-between;
  align-items: center;
}

.menu-btn {
  background: transparent;
  width: 32px;
  height: 32px;
  border: none;
  font-size: 32px;
  color: #00442F;
}

@media screen and (max-width: 768px) {
  .menu-desktop {
    display: none;
  }

  .header-desktop {
    display: none;
  }

  .is-mobile {
    display: block;
  }

  .top-header {
    display: flex;
  }

  .box-logo {
    height: 100%;
    width: 150px;
  }

  .search {
    padding: 0;
    padding-top: 10px;
    max-width: revert;
    width: 100%;
  }

  .cart {
    display: flex;
    font-size: 26px;
    min-width: 38px;
    min-height: 38px;
    width: 38px;
    height: 38px;
    align-items: center;
    justify-content: space-around;
  }
}
</style>