<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物车</div></nav-bar>
    <tab-cotrol
      :titles="['流行', '新款', '精选']"
      @tabClick="tabClick"
      ref="tabCotrol1"
      class="tab-cotrol"
      v-show="istabFixed"
    />
    <scroll
      class="content"
      ref="scroll"
      :probe-type="3"
      @scroll="contentScroll"
      :pull-up-load="true"
      @pullingUp="loadMore"
    >
      <home-swiper :banners="banners" @swiperImageLoad="swiperImageLoad" />
      <recommend-view :recommends="recommends" />
      <feature-view />
      <tab-cotrol
        :titles="['流行', '新款', '精选']"
        @tabClick="tabClick"
        ref="tabCotrol2"
      />
      <!-- :class="{ fixed: istabFixed }" 此路不通:用过用position：fixed实现吸顶效果实现不了-->
      <!-- <goods-list :goods="showGoods" @imgLoad="imgLoad" /> -->
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
// import BackTop from "components/content/backTop/BackTop";

import HomeSwiper from "./ChildComps/HomeSwiper";
import RecommendView from "./ChildComps/RecommendView";
import FeatureView from "./ChildComps/FeatureView.vue";

import { getHomeMultidata, getHomeGoods } from "network/home";

// import { debounce } from "common/utils";
import { itemListenerMixin, backTopMixin, tabControlMixin } from "common/mixin";
export default {
  name: "Home",
  components: {
    NavBar,
    TabCotrol,
    HomeSwiper,
    RecommendView,
    FeatureView,
    GoodsList,
    Scroll
    // BackTop,
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

      isShowBackTop: false,
      timer: null,
      tabOffsetTop: 0,
      istabFixed: false,
      saveY: 0
      // itemImgListener: null
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
  mounted() {
    //接收事件总线的图片加载事件
    //监听item中的图片加载完成
    // ===============================实现混入
    // this.itemImgListener = () => {
    //   refresh();
    //   console.log(111);
    // };
    // const refresh = debounce(this.$refs.scroll.refresh, 50);
    // this.$bus.$on("itemImageLoad", this.itemImgListener);
    // =======================================
    // this.$bus.$on("swiperImageLoad", () => {
    //this.tabOffsetTop = this.$refs.tabCotrol.$el.offsetTop;
    // console.log(this.tabOffsetTop);
    // });
  },
  mixins: [itemListenerMixin, backTopMixin, tabControlMixin],
  activated() {
    this.$refs.scroll.scrollTo(0, this.saveY);
    this.$refs.scroll.refresh();
  },
  deactivated() {
    // this.saveY = this.saveY;
    this.saveY = this.$refs.scroll.getScrollY();
    this.$bus.$off("itemImageLoad", this.itemImgListener);
  },
  methods: {
    //事件监听相关方法
    // tabClick(index) {
    //   switch (index) {
    //     case 0:
    //       this.currentType = "pop";
    //       break;
    //     case 1:
    //       this.currentType = "new";
    //       break;
    //     case 2:
    //       this.currentType = "sell";
    //       break;
    //   }
    //   this.$refs.tabCotrol1.currentIndex = index;
    //   this.$refs.tabCotrol2.currentIndex = index;
    // },
    // backClick() {
    //   this.$refs.scroll.scrollTo(0, 0, 500);
    // },
    contentScroll(position) {
      //1.判断BackTop是否出现
      this.isShowBackTop = -position.y > 1000;
      //2.决定tabCotrol是否吸顶(position:fixed)||出现
      this.istabFixed = -position.y > this.tabOffsetTop;
      //3.保存离开时的y坐标
      // this.saveY = -position.y;
    },
    loadMore() {
      this.getHomeGoods(this.currentType);
    },
    // imgLoad() {
    //   this.$refs.scroll.scroll.refresh();
    // },
    swiperImageLoad() {
      this.tabOffsetTop = this.$refs.tabCotrol2.$el.offsetTop;
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
  /* padding-top: 0.44rem; */
  height: 100vh;
  position: relative;
}
.home-nav {
  background: var(--color-tint);
  color: aliceblue;
  /* 在浏览器使用原生滚动时，为了让导航不一起滚动  */
  /* position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1; */
}
.tab-cotrol {
  position: relative;
  z-index: 9;
  background: white;
}
/* 行不通 */
/* .fixed {
  position: fixed;
  left: 0;
  right: 0;
  background: white;
  top: 0.44rem;
  transform: translate(0, 44px) !important;
} */
.content {
  /* height: calc(100% - 0.49rem); */
  position: absolute;
  top: 0.44rem;
  bottom: 0.49rem;
  left: 0;
  right: 0;
}
</style>
