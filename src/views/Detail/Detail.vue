<template>
  <div id="deatil">
    <child-nav-bar @titleClick="titleClick" ref="navBar" />
    <scroll
      class="content"
      ref="scroll"
      :probe-type="3"
      @scroll="contentScroll"
    >
      <div>
        <detail-swiper :top-images="topImages" v-if="topImages.length" />
        <detail-base-info :goods="goods" />
        <detail-shop-info :shop="shop" />
      </div>
      <detail-goods-info :detailInfo="detailInfo" @imageLoad="imageLoad" />
      <detail-params-info :param-info="paramInfo" ref="params" />
      <detail-comment-info :comment-info="commentInfo" ref="comment" />
      <goods-list :goods="recommend" ref="recommend" />
    </scroll>
    <detail-bottom-bar @addClick="addClick" />
    <!-- <toast :message="message" :show="show" /> -->
    <back-top @click.native="backClick" v-show="isShowBackTop" />
  </div>
</template>

<script>
import ChildNavBar from "./childComps/ChildNavBar.vue";
import DetailSwiper from "./childComps/DetailSwiper.vue";
import DetailBaseInfo from "./childComps/DetailBaseInfo.vue";
import DetailShopInfo from "./childComps/DetailShopInfo.vue";
import DetailGoodsInfo from "./childComps/DetailGoodsInfo.vue";
import DetailParamsInfo from "./childComps/DetailParamsInfo.vue";
import DetailCommentInfo from "./childComps/DetailCommentInfo.vue";
import DetailBottomBar from "./childComps/DetailBottomBar.vue";

import scroll from "components/common/scroll/Scroll.vue";
import BackTop from "components/content/backTop/BackTop.vue";
import GoodsList from "components/content/goods/GoodsList.vue";
// import Toast from "components/common/toast/Toast.vue";

import { debounce } from "common/utils";
import { itemListenerMixin, backTopMixin } from "common/mixin";
import { mapActions } from "vuex";

import {
  getDetail,
  Goods,
  Shop,
  GoodsParam,
  getRcommend
} from "network/detail";

export default {
  components: {
    ChildNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    scroll,
    DetailGoodsInfo,
    DetailParamsInfo,
    DetailCommentInfo,
    GoodsList,
    DetailBottomBar
    // Toast
  },
  name: "Detail",
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailImage: [],
      isBackShow: false,
      detailInfo: {},
      paramInfo: {},
      commentInfo: {},
      recommend: [],
      themeTopYs: [],
      // itemImgListener: null
      getThemeTopY: null,
      currentIndex: 0
      // message: "",
      // show: false
    };
  },
  created() {
    //保存传入的iid
    // console.log(this.$route);
    this.iid = this.$route.params.id;
    // this.iid = this.$route.query.iid;
    getRcommend().then(res => {
      this.recommend = res.data.list;
    });
    //根据iid请求数据
    getDetail(this.iid).then(res => {
      // console.log(res);
      const data = res.result;
      //2.取出轮播图信息
      this.topImages = data.itemInfo.topImages;
      //3.//取出商品信息
      this.goods = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );

      //4.取出店铺信息
      this.shop = new Shop(data.shopInfo);
      //5.取出详情页信息
      this.detailInfo = data.detailInfo;
      //6.取出参数信息
      this.paramInfo = new GoodsParam(
        data.itemParams.info,
        data.itemParams.rule
      );
      //7.取出评论信息
      data.rate.cRate ? (this.commentInfo = data.rate.list[0]) : {};
      //内容全部渲染完成进行回调
      //Dom渲染完毕但是图片没有加载完毕(获取到的图片offsetTop不对)
      // this.$nextTick(() => {
      //   this.themeTopYs = [];
      //   this.themeTopYs.push(0);
      //   this.themeTopYs.push(this.$refs.params.$el.offsetTop);
      //   this.themeTopYs.push(this.$refs.comment.$el.offsetTop);
      //   this.themeTopYs.push(this.$refs.recommend.$el.offsetTop);
      //   console.log(this.themeTopYs);
      // });
      this.getThemeTopY = debounce(() => {
        this.themeTopYs = [];
        this.themeTopYs.push(0);
        this.themeTopYs.push(this.$refs.params.$el.offsetTop);
        this.themeTopYs.push(this.$refs.comment.$el.offsetTop);
        this.themeTopYs.push(this.$refs.recommend.$el.offsetTop);
        this.themeTopYs.push(Number.MAX_VALUE);
      }, 500);
    });
  },
  mixins: [itemListenerMixin, backTopMixin],
  methods: {
    ...mapActions({
      add: "addCart"
    }),
    // backClick() {
    //   this.$refs.scroll.scrollTo(0, 0, 500);
    // },
    contentScroll(position) {
      this.isShowBackTop = -position.y > 1000;
      const positionY = -position.y;
      // for (let i in this.themeTopYs) {
      //   //i是一个字符串
      //   if (
      //     positionY > this.themeTopYs[parseInt(i)] &&
      //     positionY < this.themeTopYs[parseInt(i) + 1] 当i等于3//undefind
      //   ) {
      //     console.log(i);
      //   }
      // }
      const themeTopYsLength = this.themeTopYs.length;
      // for (let i = 0; i < themeTopYsLength; i++) {
      // 多加了一个所以要减去一个
      for (let i = 0; i < themeTopYsLength - 1; i++) {
        // if (
        //   this.currentIndex !== i &&
        //   ((i < themeTopYsLength - 1 &&
        //     positionY >= this.themeTopYs[i] &&
        //     positionY < this.themeTopYs[i + 1]) ||
        //     (i === themeTopYsLength - 1 && positionY >= this.themeTopYs[i]))
        // ) {
        //   this.currentIndex = i;
        //   this.$refs.navBar.currentIndex = this.currentIndex;
        // }
        if (
          this.currentIndex !== i &&
          positionY >= this.themeTopYs[i] &&
          positionY < this.themeTopYs[i + 1]
        ) {
          this.currentIndex = i;
          this.$refs.navBar.currentIndex = this.currentIndex;
        }
      }
    },
    addClick() {
      const product = {};
      product.image = this.topImages[0];
      product.title = this.goods.title;
      product.desc = this.goods.desc;
      product.realPrice = this.goods.realPrice;
      product.iid = this.iid;
      // this.$store.dispatch("addCart", product).then(res => {
      //   console.log(res);
      // });
      this.add(product).then(res => {
        this.$toast.show(res);
      });
    },
    imageLoad() {
      this.$refs.scroll.refresh();
    },
    titleClick(index) {
      this.$refs.scroll.scrollTo(0, -this.themeTopYs[index], 300);
    }
  },
  updated() {},

  destroyed() {
    this.$bus.$off("itemImageLoad", this.itemImgListener);
  }
};
</script>

<style scoped>
#deatil {
  position: relative;
  z-index: 9;
  background: white;
  height: 100vh;
}
.content {
  height: calc(100% - 0.44rem - 0.49rem);
}
</style>
