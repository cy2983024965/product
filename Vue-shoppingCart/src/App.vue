<template>
  <div id="app">
      <div is="product"></div>
      <div is="shoppingCart"></div>
  </div>
</template>

<script>
  import product from "@/components/product.vue"
  import shoppingCart from "@/components/shoppingCart.vue"
export default {
    components:{product,shoppingCart}
}
</script>

<style>

</style>
