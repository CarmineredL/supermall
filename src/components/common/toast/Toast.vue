<template>
  <div id="toast" v-show="isShow">
    <div class="context">{{ message }}</div>
  </div>
</template>

<script>
export default {
  name: "Toast",
  // props: {
  //   message: {
  //     type: String,
  //     default: ""
  //   },
  //   show: {
  //     type: Boolean,
  //     default: false
  //   }
  // }
  data() {
    return {
      message: "",
      isShow: false,
      timer: null
    };
  },
  methods: {
    show(message, delay = 1500) {
      this.message = message;
      this.isShow = true;
      clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        this.message = "";
        this.isShow = false;
      }, delay);
    }
  }
};
</script>

<style scoped>
#toast {
  background-color: rgba(0, 0, 0, 0.75);
  position: fixed;
  left: 50%;
  top: 50%;
  z-index: 9;
  transform: translate(-50%, -50%);
  color: white;
  border-radius: 0.1rem;
}
.context {
  padding: 0.2rem 0.2rem;
  text-align: center;
}
</style>
