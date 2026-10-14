export default {
  state: {
    shopCartNum: 0
  },
  getters: {
    shopCartNum: state => state.shopCartNum
  },
  mutations: {
    SET_ORDERENSURE: (state, num) => {
      state.shopCartNum = num;
    }
  },
  actions: {}
};
