<template>
  <div class="shop-info">
    <div class="shop-top">
      <img :src="shop.logo" alt="" />
      <span>{{ shop.name }}</span>
    </div>
    <div class="shop-middle">
      <div class="shop-middle-left">
        <div class="info-sells">
          <div class="sells-count">{{ shop.sells | sellCountFilter }}</div>
          <div class="sells-text">总销量</div>
        </div>
        <div class="info-goods">
          <div class="goods-count">{{ shop.goodsCount }}</div>
          <div class="goods-text">全部宝贝</div>
        </div>
      </div>
      <div class="shop-middle-right">
        <table>
          <tr v-for="(item, index) in shop.score" :key="index">
            <td>{{ item.name }}</td>
            <td class="score" :class="{ 'score-better': item.isBetter }">
              {{ item.score }}
            </td>
            <td class="better" :class="{ 'better-more': item.isBetter }">
              <span>{{ item.isBetter ? "高" : "低" }}</span>
            </td>
          </tr>
        </table>
      </div>
    </div>
    <div class="shop-bottom">
      <div class="enter-shop">进店逛逛</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailShopInfo",
  props: {
    shop: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  filters: {
    sellCountFilter(value) {
      return value < 10000 ? value : (value / 10000).toFixed(1) + "万";
    }
  }
};
</script>

<style scoped>
.shop-top {
  padding: 0.2rem 0.1rem;
  display: flex;
  justify-content: start;
  align-items: center;
}
.shop-top img {
  height: 0.5rem;
  border-radius: 50%;
  border: 0.02rem solid #ccc;
  margin-right: 0.1rem;
}
.shop-middle {
  height: 1.3rem;
  display: flex;
}
.shop-middle-left,
.shop-middle-right {
  flex: 1;
}
.shop-middle-left {
  display: flex;
  justify-content: center;
  align-items: center;
}
.info-sells,
.info-goods {
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  text-align: center;
  font-size: 0.12rem;
}
.info-goods {
  border-right: 0.01rem solid #ccc;
}
.sells-count,
.sells-text,
.goods-count,
.goods-text {
  padding: 0.025rem 0;
}
.shop-middle-right {
  font-size: 0.13rem;
  color: #333;
  display: flex;
  justify-content: center;
  align-items: center;
}

.shop-middle-right table {
  width: 1.2rem;
  margin-left: 30px;
}

.shop-middle-right table td {
  padding: 0.05rem 0;
}

.shop-middle-right .score {
  color: #5ea732;
}

.shop-middle-right .score-better {
  color: #f13e3a;
}

.shop-middle-right .better span {
  background-color: #5ea732;
  color: #fff;
  text-align: center;
}

.shop-middle-right .better-more span {
  background-color: #f13e3a;
}

.shop-bottom {
  text-align: center;
  margin-top: 0.1rem;
}

.enter-shop {
  display: inline-block;
  font-size: 0.14rem;
  background-color: #f2f5f8;
  width: 1.5rem;
  height: 0.3rem;
  text-align: center;
  line-height: 0.3rem;
  border-radius: 0.1rem;
}
</style>
