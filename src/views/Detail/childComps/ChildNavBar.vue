<template>
  <div>
    <nav-bar>
      <div slot="left" class="back" @click="backClick">
        <img src="~assets/img/common/back.svg" alt="" />
      </div>
      <div slot="center" class="title">
        <span
          v-for="(item, index) in title"
          :key="item"
          @click="titleClick(index)"
          :class="{ active: currentIndex === index }"
          class="title-item"
          >{{ item }}</span
        >
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar.vue";

export default {
  components: { NavBar },
  name: "ChildNavBar",
  data() {
    return {
      title: ["商品", "参数", "评论", "推荐"],
      currentIndex: 0
    };
  },
  methods: {
    titleClick(index) {
      this.currentIndex = index;
      this.$emit("titleClick", index);
    },
    backClick() {
      this.$router.go(-1);
    }
  }
};
</script>

<style scoped>
.title {
  display: flex;
  font-size: 0.13rem;
}
.title-item {
  flex: 1;
}
.active {
  color: var(--color-high-text);
}
.back {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
