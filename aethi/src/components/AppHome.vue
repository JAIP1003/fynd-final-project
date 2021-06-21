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
    </div>
</template>

<script>
import items  from '@/data/item';
import ProductSummaryCard from './products/productSummaryCard';
import productDetails from './products/productDetails';
export default {
    name: 'AppHome',
    components:{
        ProductSummaryCard,
        productDetails
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
</style>