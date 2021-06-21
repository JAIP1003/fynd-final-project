<template>
    <div class="home">

        <div v-if="product === null" class="product-card-container">
            <product-summary-card
            v-for="product in items"
            :key="product.id"
            :product="product"
            v-on:view-product="viewProduct($event)"
            >
            </product-summary-card>
        </div>
         <div v-else>
            <product-details 
            :product="product"
            v-on:go-back="productNull($event)"
            >
            </product-details>
        </div>
        <div class="add-product-button">
            <router-link to="/addProduct"><button class="view-product-button">Add More Product</button> </router-link>
        </div>
    </div>
</template>

<script>
import items  from '@/data/item';
import ProductSummaryCard from './adminProducts/productSummaryCard';
import ProductDetails from './adminProducts/productDetails';
export default {
    name: 'AdminHome',
    components:{
        ProductSummaryCard,
        ProductDetails
    },
    data(){
        return{
            items: items,
            product: null,
            // active: {
            //     product_drawer: false
            // }

        }
    },
    methods:{
        viewProduct( product ){
            this.product = product;
           // this.active.product_drawer = true
            // console.log( this.product );
        },
        productNull(product){
            this.product = product;
        }
    }
    
}
</script>

<style scoped>
.product-card-container{
    display: flex;
    flex-wrap: wrap;
    flex: 1 1 25%;
    justify-content: space-around;
    align-items: center;
    text-align: center;
}
.add-product-button{
    text-align: center;
    margin: 10px 0 50px 0;
}
 button.view-product-button{
        padding: 10px;
        background-color: black;
        border: none;
        color: white;
        font-weight: bold;
        border-radius: 5px;
        cursor: pointer;
        margin: 0 20px;
    }
</style>