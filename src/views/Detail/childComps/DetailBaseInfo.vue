<template>
  <div class="base-info" v-if="Object.keys(goods).length !== 0">
    <div class="info-title">{{ goods.title }}</div>
    <div class="info-price">
      <span class="n-price">{{ goods.newPrice }}</span>
      <span class="o-price">{{ goods.oldPrice }}</span>
      <span v-if="goods.discount" class="discount">{{ goods.discount }}</span>
    </div>
    <div class="info-other">
      <span>{{ goods.columns[0] }}</span>
      <span>{{ goods.columns[1] }}</span>
      <span>{{ goods.services[goods.services.length - 1].name }}</span>
    </div>
    <div class="info-service">
      <span
        v-for="index in goods.services.length - 1"
        :key="index"
        class="info-service-item"
      >
        <img :src="goods.services[index - 1].icon" alt="" />
        <span>{{ goods.services[index - 1].name }}</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailBaseInfo",
  props: {
    goods: {
      type: Object,
      defualt() {
        return {};
      }
    }
  }
};
</script>

<style scoped>
.info-title {
  font-size: 0.18rem;
  padding: 0.1rem;
}
.info-price {
  padding: 0 0.1rem;
  height: 0.25rem;
}
.info-price .n-price {
  font-size: 0.2rem;
  color: var(--color-high-text);
}
.info-price .o-price {
  font-size: 0.14rem;
  margin: 0 0.05rem;
  text-decoration: line-through;
  color: #bababa;
}
.discount {
  background: var(--color-tint);
  display: inline-block;
  padding: 0.02rem 0.1rem;
  text-align: center;
  border-radius: 0.1rem;
  color: white;
  font-size: 0.14rem;
  position: relative;
  top: -0.05rem;
}
.info-other {
  display: flex;
  justify-content: space-between;
  padding: 0.2rem 0.1rem 0.1rem;
  font-size: 0.12rem;
  color: #bababa;
  border-bottom: 0.05rem solid #f6f6f6;
}
.info-service {
  display: flex;
  justify-content: space-between;
  height: 0.66rem;
  font-size: 0.12rem;
  align-items: center;
  border-bottom: 0.05rem solid #f6f6f6;
}
.info-service-item {
  padding: 0 0.1rem;
}
.info-service-item img {
  width: 0.12rem;
}
</style>
