<template>
  <div class="nav-bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style scoped>
.nav-bar {
  display: flex;
  line-height: 0.44rem;
  height: 0.44rem;
  box-shadow: 0px 1px 2px 0px rgba(100, 100, 100, 0.1);
  font-size: 0.16rem;
}
.left,
.right {
  width: 0.6rem;
}
.center {
  flex: 1;
  text-align: center;
}
</style>