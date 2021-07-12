<template>
  <div class="bottom-bar">
    <div class="bar-item bar-left">
      <div>
        <i class="icon service"></i>
        <span class="text">客服</span>
      </div>
      <div>
        <i class="icon shop"></i>
        <span class="text">店铺</span>
      </div>
      <div>
        <i class="icon select"></i>
        <span class="text">收藏</span>
      </div>
    </div>
    <div class="bar-item bar-right">
      <div class="cart" @click="addToCart">加入购物车</div>
      <div class="buy">购买</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailBottomBar",
  methods: {
    addToCart() {
      this.$emit("addClick");
    },
  },
};
</script>

<style scoped>
.bottom-bar {
  position: fixed;
  background: white;
  left: 0;
  right: 0;
  bottom: 0;
  height: 0.49rem;
  display: flex;
  text-align: center;
}
.bar-item {
  flex: 1;
  display: flex;
}

.bar-item > div {
  flex: 1;
}

.bar-left .text {
  font-size: 0.13rem;
}

.bar-left .icon {
  display: block;
  width: 0.22rem;
  height: 0.22rem;
  margin: 0.06rem auto 0.03rem;
  background: url("~assets/img/detail/detail_bottom.png") 0 0/100%;
}

.bar-left .service {
  background-position: 0 -0.54rem;
}

.bar-left .shop {
  background-position: 0 -0.98rem;
}

.bar-right {
  font-size: 0.15rem;
  color: #fff;
  line-height: 0.49rem;
}

.bar-right .cart {
  background-color: #ffe817;
  color: #333;
}

.bar-right .buy {
  background-color: #f69;
}

.sport-ball {
  position: absolute;
  left: 2.25rem;
  bottom: 0.2rem;
}
</style>