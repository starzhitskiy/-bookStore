
<template>
  <div class="vlp-menu">
    <HeaderMob class="mobileNav" />

    <div class="vlp-menu__inner">
      <nav class="vlp-menu__nav">
        <div class="vlp-menu__logo"></div>
        <!-- /.vlp-menu__logo -->
        <router-link class="notlink" to="/">
          <svg width="99" height="88" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 88l22-73h17l23 73H39l-8-42-9 42H0z" fill="#F9D61C" />
            <path
              d="M63.46 24.6l2.01-1 17.01 51.67L99 65 76 0 39 15l23 73 15.05-9.36 3.31-2.05-16.9-51.99z"
              fill="#110601"
            />
          </svg>
        </router-link>
        <router-link class="link" to="/catalog">КАТАЛОГ</router-link>
        <router-link class="link" to="/#">ПОДІЇ/ЦІКАВЕ</router-link>
        <router-link class="link" to="/contacts">КОНТАКТИ</router-link>
      </nav>
      <div class="vlp-menu__login"></div>
      <!-- /.vlp-menu__login -->
    </div>
  </div>
  <!-- /.vlp-menu -->
</template>

<script>
import HeaderMob from "@/components/HeaderMob";
export default {
  name: "Header",
  components: {
    HeaderMob,
  },
};
</script>

<style lang="scss">
.mobileNav {
  display: none;
  @media screen and (max-width: 640px) {
    display: flex;
  }
}
.vlp-menu {
  &__inner {
    display: none;

    @media screen and (min-width: 639px) {
      display: flex;
    }
    font: 400 20px/1.1 Philosopher, sans-serif;
    position: relative;

    &::after {
      content: "";
      position: absolute;
      background: #110601;
      top: 63px;
      left: 99px;
      height: 1px;
      width: 550px;
    }
  }
  &__nav {
    display: flex;
    justify-content: space-between;
    &__logo {
      margin: 7px 10px 0 15px;
    }
    .notlink {
      margin: 0 0 0 15px;
    }
    a {
      margin-top: 39px;
      text-decoration: none;
      color: #110601;
      margin-left: 65px;
      position: relative;
    }
    .router-link-exact-active.link {
      &::after {
        content: "";
        position: absolute;
        background: rgba(255, 179, 32, 0.94);
        top: 25px;
        z-index: 1;
        left: 0;
        height: 2px;
        width: 100%;
      }
    }
  }
}
</style>