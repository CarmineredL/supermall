<template>
  <div class="cart">
    <nav-bar>
      <div slot="center">购物车({{ length }})</div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar.vue";
import { mapGetters } from "vuex";
export default {
  components: { NavBar },
  name: "ShopNavBar",
  computed: {
    // cartLength() {
    //   return this.$store.getters.cartLength;
    // },
    //两种语法
    //  1. ...mapGetters(["cartLength"]),
    // 2.
    ...mapGetters({ length: "cartLength" }),
  },
};
</script>

<style scoped>
.cart {
  background: var(--color-tint);
  color: #fff;
  font-weight: bold;
}
</style>