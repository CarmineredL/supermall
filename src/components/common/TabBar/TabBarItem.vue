<template>
  <div class="tab-bar-item" @click="btnClick">
    <div v-if="!isActive"><slot name="itemicon"></slot></div>
    <div v-else><slot name="itemicon_active"></slot></div>
    <div :style="activeColor"><slot name="itemtext"></slot></div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  data() {
    return {};
  },
  props: {
    path: String,
    activecolor: {
      type: String,
      default: "red",
    },
  },
  methods: {
    btnClick() {
      this.$router.replace(this.path);
    },
  },
  computed: {
    isActive() {
      return this.$route.path.includes(this.path);
    },
    activeColor() {
      return this.isActive ? { color: this.activecolor } : {};
    },
  },
};
</script>

<style scoped>
.tab-bar-item {
  flex: 1;
  text-align: center;
  margin-top: 0.04rem;
  font-size: 0.12rem;
}
.tab-bar-item img {
  display: inline-block;
  height: 0.23rem;
  width: 0.23rem;
  margin-bottom: 0.02rem;
}
</style>