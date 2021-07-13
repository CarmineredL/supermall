export default {
  addCart(context, payload) {
    return new Promise((resolve, rejeck) => {
      // let oldProduct = null
      // for (let item of state.cartList) {
      //   if (item.iid === payload.iid) {
      //     oldProduct = item
      //   }
      // }
      let oldProduct = context.state.cartList.find(item => item.iid === payload.iid)
      if (oldProduct) {
        //商品数量加一
        // oldProduct.count += 1
        context.commit('addCounter', oldProduct)
        resolve('商品数量加一')
      } else {
        payload.count = 1
        // context.state.cartList.push(payload)
        context.commit('addToCart', payload)
        resolve('加入购物车成功')
        // 添加新商品
      }
    })
  }
}
