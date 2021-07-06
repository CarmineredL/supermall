<template>
  <div>
    <tab-bar>
      <tab-bar-item path="/home">
        <img src="~assets/img/tabbar/home.svg" alt="" slot="itemicon" />
        <img
          src="~assets/img/tabbar/home_active.svg"
          alt=""
          slot="itemicon_active"
        />
        <div slot="itemtext">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category">
        <img src="~assets/img/tabbar/category.svg" alt="" slot="itemicon" />
        <img
          src="~assets/img/tabbar/category_active.svg"
          alt=""
          slot="itemicon_active"
        />
        <div slot="itemtext">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/shopcart">
        <img src="~assets/img/tabbar/shopcart.svg" alt="" slot="itemicon" />
        <img
          src="~assets/img/tabbar/shopcart_active.svg"
          alt=""
          slot="itemicon_active"
        />
        <div slot="itemtext">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile">
        <img src="~assets/img/tabbar/profile.svg" alt="" slot="itemicon" />
        <img
          src="~assets/img/tabbar/profile_active.svg"
          alt=""
          slot="itemicon_active"
        />
        <div slot="itemtext">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from "components/common/TabBar/TabBar";
import TabBarItem from "components/common/TabBar/TabBarItem";
export default {
  components: { TabBar, TabBarItem },
  name: "MainTabBar",
};
</script>

<style scoped>
.tab-bar-item {
  flex: 1;
  text-align: center;
}
.tab-bar-item img {
  height: 0.23rem;
  width: 0.23rem;
}
</style>