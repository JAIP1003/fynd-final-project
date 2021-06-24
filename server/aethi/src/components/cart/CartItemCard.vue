<template>
    <div class="cart-item-card">
        <div class="header">
            <h3>{{ product.name }}</h3>
            <h4>In Cart: <span class="cart-quantity-change">
                <i class="fas fa-plus" @click="addToCart()"></i></span>
            {{ product.quantity }} 
            <span class="cart-quantity-change" @click="removeFromCart()">
                <i class="fas fa-minus"></i></span></h4>
            <h4>Total Cost: {{ item_cost.toFixed(2) }}</h4>
        </div>

        <p>{{ description }}</p>
    </div>
</template>

<script>
import  store  from "../../store/index";
export default {
    name: 'CartItemCard',
    props: [ 'product' ],
    computed: {
        description(){
            return this.product.description.substring(0, 120)
        },
        item_cost(){
            return this.product.price * this.product.quantity;
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
    .cart-item-card{
        width: 90%;
        margin: 5%;
        background-color: white;
        box-shadow: 0 0 5px gray;
        border-radius: 5px;
        padding: 10px;
        text-align: left;
    }
    .header{
        display: flex;
        justify-content: space-around;
        font-size: 0.5rem;
        font-weight: bold;
    }
    @media (max-width: 600px){
        .header{
            display: block;
            text-align: center;
            font-size: 20px;
        }
    }

   .cart-quantity-change{
       margin: 0 10px;
       cursor: pointer;
       font-size: 0.7em;
       opacity: 0.7;
   }
   .cart-quantity-change:hover{
       opacity: 1;
   }
</style>