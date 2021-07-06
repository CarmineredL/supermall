<template>
  <div class="tab-cotrol">
    <div
      v-for="(item, index) in titles"
      :key="item"
      class="tab-cotrol-item"
      :class="{ active: index === currentIndex }"
      @click="itemClick(index)"
    >
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabCotrol",
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      currentIndex: 0,
    };
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index;
    },
  },
};
</script>

<style scoped>
.tab-cotrol {
  display: flex;
  text-align: center;
  height: 0.4rem;
  line-height: 0.4rem;
  font-size: 0.14rem;
}
.tab-cotrol-item {
  flex: 1;
}
.tab-cotrol-item span {
  padding: 0.04rem;
}
.active {
  color: var(--color-high-text);
}
.active span {
  border-bottom: 0.03rem solid var(--color-high-text);
}
</style>