<template>
    <div class="kart">
        <h1>Your Cart </h1>

        <cart-item-card 
        v-for="product in items" 
        :key="product.id"
        :product="product"
        >    
        </cart-item-card>

        <cart-payment-card
        >
        </cart-payment-card>
    </div>
</template>

<script>
import store from '../store/index';
import CartItemCard from './cart/CartItemCard';
import CartPaymentCard from './cart/CartPaymentCard';

export default {
    name: 'AppCart',
    components:{
        CartItemCard,
        CartPaymentCard
    },

    computed: {
        items() {
            return store.getters.cartItems       
        },
    }
    
}
</script>

<style scoped>
.kart{
    text-align: center;
}
</style>