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
import ObserveDOM from "@better-scroll/observe-dom";
import ObserveImage from "@better-scroll/observe-image";

BScroll.use(Pullup);
BScroll.use(ObserveDOM);
BScroll.use(ObserveImage);
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
      observeDOM: true,
      observeImage: true,
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad,
      click: true
    });
    //滚动监听位置
    if (this.probeType === 2 || this.probeType === 3) {
      this.scroll.on("scroll", position => {
        // console.log(position.x, position.y);
        //  发射滚动坐标
        this.$emit("scroll", position);
      });
    }
    //监听scroll滚动到底部
    this.pullUpLoad &&
      this.scroll.on("pullingUp", () => {
        // 发射滚动到底部事件
        this.$emit("pullingUp");
        //默认只能加载一次
        this.scroll.finishPullUp();
      });
  },
  methods: {
    scrollTo(x, y, time = 300) {
      this.scroll && this.scroll.scrollTo(x, y, time);
    },
    finishPullUp() {
      this.scroll && this.scroll.finishPullUp();
    },
    refresh() {
      this.scroll && this.scroll.refresh();
    },
    getScrollY() {
      return this.scroll ? this.scroll.y : 0;
    }
  }
};
</script>

<style scoped>
.wrapper {
  overflow: hidden;
}
</style>
