<template>
<div class="card">
    <div class="drawer">
        <div v-if="product" class="product-details">
            <h3 class="text-center">{{product.name}}</h3>
            <p class="description">{{product.description}}</p>
            <h3 class="text-center">${{product.price.toFixed(2)}}</h3>

            <div class="cart-total" v-if="product_total">
                <h3>In Cart</h3>
                <h4>{{product_total}}</h4>
            </div>

            <div class="button-container">
                <button class="remove">Remove from Cart</button>
                <button class="add">Add to Cart</button>
                <button class="add" @click="$emit('go-back',null)">Go Back</button>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
export default {
    name: 'ProductDetails',
    props: [
        'product',
        'active'
        ],
    computed:{
        product_total(){
            return 58.00
        }
    }
    
}
</script>

<style scoped>
 .drawer{
     text-align: center;
 }
   
  
</style>