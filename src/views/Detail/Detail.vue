<template>
  <div id="deatil">
    <child-nav-bar />
    <scroll
      class="content"
      ref="scroll"
      @detailScroll="contentScroll"
      :probe-type="3"
    >
      <div>
        <detail-swiper :top-images="topImages" v-if="topImages.length" />
        <detail-base-info :goods="goods" />
        <detail-shop-info :shop="shop" />
      </div>
      <detail-goods-info :detailInfo="detailInfo" @imageLoad="imageLoad" />
    </scroll>
    <back-top @click.native="backClick" v-show="isBackShow" />
  </div>
</template>

<script>
import ChildNavBar from "./childComps/ChildNavBar.vue";
import DetailSwiper from "./childComps/DetailSwiper.vue";
import DetailBaseInfo from "./childComps/DetailBaseInfo.vue";
import DetailShopInfo from "./childComps/DetailShopInfo.vue";
import scroll from "components/common/scroll/Scroll.vue";
import BackTop from "components/content/backTop/BackTop.vue";
import DetailGoodsInfo from "./childComps/DetailGoodsInfo";

import { getDetail, Goods, Shop } from "network/detail";

export default {
  components: {
    ChildNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    scroll,
    BackTop,
    DetailGoodsInfo
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
      detailInfo: {}
    };
  },
  created() {
    //保存传入的iid
    // console.log(this.$route);
    this.iid = this.$route.params.id;
    // this.iid = this.$route.query.iid;
    //根据iid请求数据
    getDetail(this.iid).then(res => {
      console.log(res);
      const data = res.result;
      this.topImages = data.itemInfo.topImages;
      this.goods = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );
      this.shop = new Shop(data.shopInfo);
      this.detailInfo = data.detailInfo;
    });
  },
  methods: {
    backClick() {
      this.$refs.scroll.scrollTo(0, 0, 500);
    },
    contentScroll(position) {
      this.isBackShow = -position.y > 500;
    },
    imageLoad() {
      this.$refs.scroll.refresh();
    }
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
  height: calc(100% - 0.44rem);
}
</style>
