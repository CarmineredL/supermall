<template>
  <div class="user-info">
    <img class="avatar" src="~assets/img/profile/avatar.svg" alt="" />
    <div class="info">
      <div class="login">登录/注册</div>
      <div class="phone">
        <img src="~assets/img/profile/phone.svg" alt="" />
        <span>暂无绑定手机号</span>
      </div>
    </div>
    <div class="arrow">
      <img src="~assets/img/common/arrow-left.svg" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: "UserInfo"
};
</script>

<style scoped>
.user-info {
  height: 0.94rem;
  background: var(--color-tint);
  display: flex;
  padding: 0 0.08rem;
  align-items: center;
}
.avatar {
  height: 0.68rem;
}
.info {
  height: 0.68rem;
  font-size: 0.14rem;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
  margin-left: 0.1rem;
}
.phone {
  display: flex;
  align-items: center;
  margin-top: 0.05rem;
}
.info img {
  height: 0.15rem;
}
.arrow {
  line-height: 0.68rem;
}
.arrow img {
  height: 0.2rem;
}
</style>
