<template>
    <div class="cart-item-card">
        <h3> Cart Total: {{ cart_total.toFixed(2) }}</h3>
        <button class="product-button" @click="makeCartEmpty()">Pay by Debit Card</button>
    </div>
</template>

<script>
import Vue from 'vue';
import store from '../../store/index';
export default {
    name: 'CartPaymentCard',
    computed: {
        cart_total(){
            return store.getters.cartTotal;
        },

    },
    methods: {
        makeCartEmpty(){
            store.commit( 'makeCartEmpty' )
            Vue.$toast.open({
                        message: 'Your order has been successfully placed',
                        type: 'success'
                    });
        }
    }
}
</script>

<style scoped>
button.product-button{
        padding: 10px;
        background-color: rgb(79, 160,187);
        border: none;
        color: white;
        font-weight: bold;
        border-radius: 5px;
        cursor: pointer;
        margin-bottom: 100px;
    }
</style>