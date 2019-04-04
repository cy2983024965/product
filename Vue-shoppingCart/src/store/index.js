import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex)

export default new Vuex.Store({
    strict:true,
    state:{
      buyProduct:[]
    },
    mutations:{
      // 添加商品到购物车
      show(state,val){
        val.price = val.tradePrice * val.tradeNum
        state.buyProduct.push(val)
      },
      //删除购物车商品
      ccdel(state,val){
       for(var i=0;i<state.buyProduct.length;i++){
         if(state.buyProduct[i].id == val){
            state.buyProduct[i].flag = true;
            state.buyProduct[i].tradeNum = 1;
            state.buyProduct.splice(i,1)
         }
       }
      },
      // 添加商品数量
      cyAdd(state,val){
        for(var i=0;i<state.buyProduct.length;i++){
          if(state.buyProduct[i].id == val){
             // console.log(1111)
            state.buyProduct[i].tradeNum++;
            state.buyProduct[i].price = state.buyProduct[i].tradePrice * state.buyProduct[i].tradeNum
            // console.log(state.buyProduct.price)
          }
        }
      },
      // 减少商品数量
      cyMinus(state,val){
        for(var i=0;i<state.buyProduct.length;i++){
            if(state.buyProduct[i].id == val){
                state.buyProduct[i].tradeNum--
                state.buyProduct[i].price = state.buyProduct[i].tradePrice * state.buyProduct[i].tradeNum
            }
          if(state.buyProduct[i].tradeNum == 0){
                state.buyProduct[i].tradeNum = 1;
                state.buyProduct[i].price = state.buyProduct[i].tradePrice * state.buyProduct[i].tradeNum
          }
        }
      },
      //清空购物车
      cyEmpty(state){
        // console.log(222)
        for(var i=0;i<state.buyProduct.length;i++){
          state.buyProduct[i].flag = true;
          state.buyProduct[i].tradeNum = 1;
        }
        state.buyProduct.splice(0,state.buyProduct.length)
      }
    },
    actions:{

      // 加入购物车
      getData(store,val){
          store.commit("show",val)
      },

      // 删除购物车单个商品
      cydel(store,val){
        store.commit("ccdel",val)
      },

      // 商品数量增加
      addData(store,val){
        store.commit("cyAdd",val)
      },

      // 商品数量减少
      minusData(store,val){
        store.commit("cyMinus",val)
      },

      // 清空购物车
      emptyData(store){
        store.commit("cyEmpty")
      }

   },

})
