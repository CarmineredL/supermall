<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物车</div></nav-bar>
    <scroll
      class="content"
      ref="scroll"
      :probe-type="3"
      @scroll="contentScroll"
      :pull-up-load="true"
      @pullingUp="loadMore"
    >
      <home-swiper :banners="banners" />
      <recommend-view :recommends="recommends" />
      <feature-view />
      <tab-cotrol
        :titles="['流行', '新款', '精选']"
        class="tab-cotrol"
        @tabClick="tabClick"
      />
      <goods-list :goods="showGoods" />
    </scroll>
    <back-top @click.native="backClick" v-show="isShowBackTop" />
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import TabCotrol from "components/content/tabCotrol/TabCotrol.vue";
import GoodsList from "components/content/goods/GoodsList.vue";
import Scroll from "components/common/scroll/Scroll.vue";
import BackTop from "components/content/backTop/BackTop";

import HomeSwiper from "./ChildComps/HomeSwiper";
import RecommendView from "./ChildComps/RecommendView";
import FeatureView from "./ChildComps/FeatureView.vue";

import { getHomeMultidata, getHomeGoods } from "network/home";

export default {
  name: "Home",
  components: {
    NavBar,
    TabCotrol,
    HomeSwiper,
    RecommendView,
    FeatureView,
    GoodsList,
    Scroll,
    BackTop
  },
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      currentType: "pop",
      isShowBackTop: false
    };
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    }
  },
  created() {
    //请求多个数据
    this.getHomeMultidata();
    //请求商品参数
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  methods: {
    //事件监听相关方法
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
    },
    backClick() {
      this.$refs.scroll.scrollTo(0, 0, 500);
    },
    contentScroll(position) {
      this.isShowBackTop = -position.y > 1000;
    },
    loadMore() {
      this.getHomeGoods(this.currentType);
    },
    //网络请求相关方法========================================
    getHomeMultidata() {
      getHomeMultidata().then(res => {
        // console.log(res.data);
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      //页面每次加1
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then(res => {
        // console.log(page);
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
        // console.log(this.goods[type].list);
        this.$refs.scroll.finishPullUp();
      });
    }
  }
};
</script>

<style scoped>
#home {
  padding-top: 0.44rem;
  height: 100vh;
  position: relative;
}
.home-nav {
  background: var(--color-tint);
  color: aliceblue;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
}
.tab-cotrol {
  position: sticky;
  top: 0.44rem;
  left: 0;
  right: 0;
  background: white;
}
.content {
  /* height: calc(100% - 0.49rem); */
  position: absolute;
  top: 0.44rem;
  bottom: 0.49rem;
  left: 0;
  right: 0;
}
</style>
