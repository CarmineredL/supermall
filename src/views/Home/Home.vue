<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物车</div></nav-bar>
    <home-swiper :banners="banners" />
    <recommend-view :recommends="recommends" />
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import HomeSwiper from "./ChildComps/HomeSwiper";
import RecommendView from "./ChildComps/RecommendView";
import { getHomeMultidata } from "network/home";
export default {
  name: "Home",
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
  },
  data() {
    return {
      banners: [],
      recommends: [],
      keywords: [],
      dKeywords: [],
    };
  },
  created() {
    getHomeMultidata().then((res) => {
      console.log(res.data);
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list;
      this.keywords = res.data.keywords;
      this.dKeywords = res.data.dKeyword;
    });
  },
};
</script>

<style scoped>
.home-nav {
  background: var(--color-tint);
  color: aliceblue;
}
</style>