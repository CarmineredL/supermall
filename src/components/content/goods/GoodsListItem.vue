<template>
  <div class="goods-item">
    <img :src="goodsItem.show.img" alt="" />
    <div class="item-title">{{ goodsItem.title }}</div>
    <div class="item-footer">
      <span class="price">￥{{ goodsItem.price }}</span>
      <span class="love">❤{{ goodsItem.cfav }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsListItem",
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {};
      }
    }
  }
};
</script>

<style scoped>
.goods-item {
  width: 45%;
  flex-shrink: 0;
  overflow: hidden;
  border-radius: 5px;
  padding-bottom: 0.1rem;
}
.goods-item .item-title {
  padding-top: 0.1rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.goods-item .item-footer {
  display: flex;
  justify-content: space-evenly;
}
.goods-item .price {
  color: var(--color-high-text);
}
.goods-item img {
  width: 100%;
}
.love {
  color: red;
}
</style>
