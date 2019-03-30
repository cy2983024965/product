<template>
  <div class="product" id="productCart">
    <h4>购物车信息</h4>
    <table class="table table-bordered">
      <thead>
      <tr class="info">
        <td>商品ID</td>
        <td>商品名称</td>
        <td>商品价格</td>
        <td>商品数量</td>
        <td>总价</td>
        <td>操作</td>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(d,i) in buyProduct" :key="i">
        <td>{{d.id}}</td>
        <td>{{d.tradeName}}</td>
        <td>{{d.tradePrice}}</td>
        <td>{{d.tradeNum}}</td>
        <td>{{d.price}}</td>
        <td>
          <button type="button" class="btn btn-success" @click="addTwo(i)">+</button>
          <button type="button" class="btn btn-warning" @click="minusTwo(i)">-</button>
          <button type="button" class="btn btn-danger" @click="del(i)">x</button>
        </td>
      </tr>
      </tbody>
    </table>
    <div class="base">
      <span>总数量：</span>{{totalNum}}<span> 件，</span>
        <span>总价格：</span>{{totalPrice}}<span> ￥</span>
        <button type="button" class="btn btn-danger abc" @click="empty">清空购物车</button>
    </div>
  </div>
</template>

<script>
    export default {
      computed:{
        //循环商品buyProduct数组，渲染到页面上
        buyProduct(){
          return this.$store.state.buyProduct
        },
        // 计算总件数
        totalNum(){
            var sl=0;
            for(var i=0;i<this.$store.state.buyProduct.length;i++){
              // console.log(1111)
              // console.log(this.$store.state.buyProduct)
              sl += this.$store.state.buyProduct[i].tradeNum
            }
            return sl
        },
        totalPrice(){
            var pricex=0;
            for(var i=0;i<this.$store.state.buyProduct.length;i++){
              pricex += this.$store.state.buyProduct[i].tradePrice * this.$store.state.buyProduct[i].tradeNum
            }
            return pricex
        }
      },
      methods:{
        // 删除购物车单个商品
        del(i){
          // strict(不严格模式下，可以直接在这里删除数组里面共享的数据)
          // this.buyProduct[i].flag = true;
          // this.buyProduct.splice(i,1);
          // console.log(this.buyProduct[i].id)
          this.$store.dispatch("cydel",this.buyProduct[i].id)
        },
        // 增加购物车商品数量
        addTwo(i){
            // console.log(i)
            this.$store.dispatch("addData",this.buyProduct[i].id);
        },
        // 减少购物车商品数量
        minusTwo(i){
           this.$store.dispatch("minusData",this.buyProduct[i].id);
        },
        // 清空购物车
        empty(){
          this.$store.dispatch("emptyData")
        }
      }
    }
</script>

<style scoped>
.btn-success{
  width: 40px;
}
.btn-warning{
  width: 40px;
}
.btn-danger{
  width: 40px;
}
tr,td{
  text-align: center;
}
.abc[data-v-8a24ae90]{
  width: 100px;
  float: right;
}
  .base{
    margin-top: 50px;
    font-weight: bold;
  }
</style>
