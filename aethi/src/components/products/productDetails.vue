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
                <button class="remove view-product-button" @click="removeFromCart()">Remove from Cart</button>
                <button class="add view-product-button" @click="addToCart()">Add to Cart</button>
                <button class="add view-product-button" @click="$emit('go-back',null)">Go Back</button>
            </div>
        </div>
    </div>
    </div>
</template>

<script>

import  store  from "../../store/index";
export default {
    name: 'ProductDetails',
    props: [
        'product',
        ],
    computed:{
        product_total(){
            return store.getters.productQuantity( this.product );
        }
    },
    methods: {
        addToCart() {
            store.commit( 'addToCart', this.product );
        },
        removeFromCart(){
            store.commit( 'removeFromCart' , this.product );
        }
    }
    
}
</script>

<style scoped>
 .drawer{
     text-align: center;
 }
 button.view-product-button{
        padding: 10px;
        background-color: rgb(79, 160,187);
        border: none;
        color: white;
        font-weight: bold;
        border-radius: 5px;
        cursor: pointer;
        margin: 0 20px;
    }
   
  
</style>