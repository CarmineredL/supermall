<template>
  <div class="account">
    <div class="account-item">
      <div class="number"><span class="balance">0.00</span>元</div>
      <div class="account-info">我的余额</div>
    </div>
    <div class="account-item">
      <div class="number"><span class="balance">0</span>个</div>
      <div class="account-info">我的优惠</div>
    </div>
    <div class="account-item">
      <div class="number"><span class="balance">0</span>分</div>
      <div class="account-info">我的积分</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AccountInfo"
};
</script>

<style scoped>
.account {
  height: 1rem;
  display: flex;
}
.account-item {
  flex: 1;
  background: white;
  margin-right: 0.01rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 0.14rem;
}
.account-item:last-of-type {
  margin-right: 0;
}
.balance {
  color: #ff603e;
  font-weight: bold;
  font-size: 0.2rem;
}
</style>
