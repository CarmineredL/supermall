<template>
  <scroll id="tab-menu" ref="scroll">
    <div class="menu-list">
      <div
        class="menu-list-item"
        v-for="(item, index) in categories"
        :key="index"
        :class="{ active: index === currentIndex }"
        @click="itemClick(index)"
      >
        {{ item.title }}
      </div>
    </div>
  </scroll>
</template>

<script>
import Scroll from "components/common/scroll/Scroll.vue";
export default {
  components: { Scroll },
  name: "TabMenu",
  props: {
    categories: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      currentIndex: 0
    };
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index;
      this.$emit("selectItem", index);
    }
  }
};
</script>

<style scoped>
#tab-menu {
  background: #f6f6f6;
  width: 1rem;
  height: 100%;
  box-sizing: border-box;
}
.menu-list-item {
  height: 0.45rem;
  line-height: 0.45rem;
  text-align: center;
  font-size: 0.14rem;
}
.menu-list-item.active {
  font-weight: 700;
  color: var(--color-high-text);
  background-color: #fff;
  border-left: 3px solid var(--color-high-text);
}
</style>
