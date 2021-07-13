<template>
  <div id="shop-cart">
    <shop-nav-bar />
    <scroll class="content" :probe-type="3" ref="scroll">
      <cart-list />
    </scroll>
    <cart-bottom-bar />
  </div>
</template>

<script>
import Scroll from "components/common/scroll/Scroll.vue";
import CartList from "./childComp/CartList.vue";
import ShopNavBar from "./childComp/ShopNavBar.vue";
import CartBottomBar from "./childComp/CartBottomBar.vue";
export default {
  components: { ShopNavBar, CartList, Scroll, CartBottomBar },
  name: "Shopcart",
  activated() {
    this.$refs.scroll.refresh();
  },
};
</script>

<style scoped>
#shop-cart {
  /* position: relative; */
  /* z-index: 9; */
  background: white;
  height: 100vh;
}
.content {
  height: calc(100% - 0.44rem - 0.49rem - 0.4rem);
}
</style>