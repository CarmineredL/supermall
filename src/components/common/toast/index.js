import Toast from './Toast.vue'
const obj = {}
obj.install = function (Vue) {
  //第一步创建组件构造器
  const toastConstructor = Vue.extend(Toast)
  //第二步创建构造器的实例
  const toast = new toastConstructor()
  //第三步将实例挂载到某个元素上
  toast.$mount(document.createElement("div"))
  //第四步在body中添加这个元素
  document.body.appendChild(toast.$el)
  //第五步在Vue原型上添加这个实例
  Vue.prototype.$toast = toast
}


export default obj
