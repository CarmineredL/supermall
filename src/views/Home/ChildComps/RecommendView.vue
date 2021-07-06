<template>
  <div class="recommend">
    <div v-for="item in recommends" :key="item.sort" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image" alt="" />
        <div>{{ item.title }}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecommendView",
  props: {
    recommends: {
      type: Array,
      defaults() {
        return [];
      },
    },
  },
};
</script>

<style scoped>
.recommend {
  display: flex;
  text-align: center;
  padding: 0.1rem 0 0.2rem;
  border-bottom: 0.1rem solid #f6f6f6;
}
.recommend-item {
  flex: 1;
  font-size: 0.12rem;
}
.recommend-item img {
  margin-bottom: 0.08rem;
  width: 0.7rem;
}
</style>