<template>
  <div class="wrapper" ref="wrapper">
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "@better-scroll/core";
import Pullup from "@better-scroll/pull-up";

BScroll.use(Pullup);
export default {
  name: "Scroll",
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      scroll: null
    };
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper, {
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad,
      click: true
    });
    this.scroll.on("scroll", position => {
      // console.log(position.x, position.y);
      //  发射滚动坐标
      this.$emit("scroll", position);
    });
    console.log(this.scroll);

    this.scroll.on("pullingUp", () => {
      // 发射滚动到底部事件
      this.$emit("pullingUp");
      this.scroll.finishPullUp();
    });
  },
  methods: {
    scrollTo(x, y, time = 300) {
      this.scroll.scrollTo(x, y, time);
    },
    finishPullUp() {
      this.scroll.finishPullUp();
      this.scroll.refresh();
    }
  }
};
</script>

<style scoped>
.wrapper {
  overflow: hidden;
}
</style>
