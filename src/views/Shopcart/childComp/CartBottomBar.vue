<template>
  <div class="bottom-bar">
    <div class="check-content">
      <check-button :is-checked="isSelectAll" @click.native="checkClick" />
      <span>全选</span>
    </div>
    <div class="total-price">
      <div>合计:{{ totalPrice }}</div>
    </div>
    <div class="calculate" @click="callbackClick">
      <div>去结算:({{ checkedLength }})</div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import CheckButton from "components/content/checkButton/CheckButton.vue";
export default {
  components: { CheckButton },
  name: "CartBottomBar",
  computed: {
    ...mapGetters(["cartList"]),
    totalPrice() {
      return (
        "￥" +
        this.cartList
          .filter(item => item.checked)
          .reduce((prev, item) => {
            return prev + parseInt(item.realPrice) * item.count;
          }, 0)
          .toFixed(2)
      );
    },
    checkedLength() {
      return this.cartList
        .filter(item => item.checked)
        .reduce((prev, item) => {
          return prev + item.count;
        }, 0);
    },
    isSelectAll() {
      if (this.cartList.length === 0) return;
      // 第一种方案
      // return !this.cartList.filter(item => !item.checked).length;
      //第二种方案
      return !this.cartList.find(item => !item.checked);
      //第三种方案
      // let isChecked = false;
      // for (let item of this.cartList) {
      //   if (!item.checked) {
      //     isChecked = false;
      //     return isChecked;
      //   }
      //   return (isChecked = true);
      // }
    }
  },
  methods: {
    checkClick() {
      if (this.isSelectAll) {
        this.cartList.forEach(item => (item.checked = false));
      } else {
        this.cartList.forEach(item => (item.checked = true));
      }
    },
    callbackClick() {
      if (this.cartList.length === 0) {
        this.$toast.show("当前购物车为空 ");
      } else {
        if (this.cartList.every(item => item.checked === false)) {
          this.$toast.show("请选择要购买的商品");
        }
      }
    }
  }
};
</script>

<style scoped>
.bottom-bar {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0.49rem;
  background: #f6f6f6;
  height: 0.4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.check-content {
  display: flex;
  height: 0.4rem;
  width: 0.8rem;
  justify-content: space-around;
  align-items: center;
}
.total-price {
  margin-right: 0.9rem;
  font-weight: bold;
}
.calculate {
  background: orange;
  height: 100%;
  display: flex;
  align-items: center;
  width: 120px;
  justify-content: center;
  font-weight: bold;
  color: #000;
}
</style>
