<template>
  <div class="check-button" :class="{ checked: isChecked }">
    <img src="~assets/img/cart/tick.svg" alt="" />
  </div>
</template>

<script>
export default {
  name: "CheckButton",
  props: {
    isChecked: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped>
.check-button {
  height: 0.2rem;
  width: 0.2rem;
  border-radius: 50%;
  border: 0.01rem solid #ccc;
}
.check-button img {
  width: 100%;
}
.checked {
  background: var(--color-tint);
  border: 0.01rem solid pink;
}
</style>