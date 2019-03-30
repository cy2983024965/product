<template>
 <div class="product">
   <h2>Vuex购物车</h2>
   <h4>商品信息</h4>
   <table class="table table-bordered">
     <thead>
     <tr class="info">
         <td>商品ID</td>
         <td>商品名称</td>
         <td>商品价格</td>
         <td>商品数量</td>
         <td>操作</td>
     </tr>
     </thead>
     <tbody>
     <tr v-for="(d,i) in product" :class="i%2?'success':'active'" :key="i">
         <td>{{d.id}}</td>
         <td>{{d.tradeName}}</td>
         <td>{{d.tradePrice}}</td>
         <td>{{d.tradeNum}}</td>
         <td v-if="d.flag">
            <button type="button" class="btn btn-success" @click="buy(i)">包养</button>
         </td>
       <td v-if="!d.flag">
           <button type="button" class="btn btn-success small" @click="add(i)">+</button>
           <button type="button" class="btn btn-warning small" @click="minus(i)">-</button>
       </td>
     </tr>
     </tbody>
   </table>
 </div>

</template>

<script>
import "bootstrap/dist/css/bootstrap.min.css"

export default {
    data(){
     return {
       product:[
         {
           id:"001",
           tradeName:"杨幂",
           tradePrice:20,
           tradeNum:1,
           flag:true,
           price:0
         },
         {
           id:"002",
           tradeName:"周冬雨",
           tradePrice:10,
           tradeNum:1,
           flag: true,
           price:0
         },
         {
           id:"003",
           tradeName:"赵丽颖",
           tradePrice:10,
           tradeNum:1,
           flag: true,
           price:0
         },
         {
           id:"004",
           tradeName:"范冰冰",
           tradePrice:15,
           tradeNum:1,
           flag: true,
           price:0
         }
       ]
     }
    },
  methods:{
      // 加入购物车
      buy(i){
        this.product[i].flag = false;
        this.$store.dispatch("getData",this.product[i]);
      },
      // 数量增加
      add(i){
        // console.log(this.product[i].id)
        this.$store.dispatch("addData",this.product[i].id);
      },
      // 数量减少
      minus(i){
      // console.log(111111)
        this.$store.dispatch("minusData",this.product[i].id);
      }
  }
}
</script>

<style scoped>
  .small{
    width: 40px;
  }
  tr,td{
    text-align: center;
    height: 50px;

  }
  td[data-v-4ce970e2]{
    line-height: 40px;
  }
</style>
