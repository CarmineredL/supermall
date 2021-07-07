<template>
  <div class="goods">
    <!-- <h2>{{ goods }}</h2> -->
    <goods-list-item v-for="item in goods" :key="item.iid" :goods-item="item" />
  </div>
</template>

<script>
import GoodsListItem from "./GoodsListItem.vue";
export default {
  components: { GoodsListItem },
  name: "GoodsList",
  props: {
    goods: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>

<style scoped>
.goods {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  border-top: 0.1rem solid #f6f6f6;
}
</style>
