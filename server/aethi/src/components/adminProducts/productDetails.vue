<template>
<div class="card">
    <div class="drawer">
        <div v-if="product" class="product-details">
            <h3 class="text-center">{{product.name}}</h3>
            <p class="description">{{product.description}}</p>
            <h3 class="text-center">${{product.price.toFixed(2)}}</h3>

            <div class="button-container">
                <button class="remove view-product-button" @click="removeTheProduct(), $emit('go-back',null)">Remove Product</button>
                <button class="add view-product-button" @click="viewUpdateForm()">Update Product</button>
                <button class="add view-product-button" @click="$emit('go-back',null)">Go Back</button>
            </div>
            
            <div v-if="updateItem === true" >
            <update-product :item="item" 
            ></update-product>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
    import Vue from 'vue';
    import { deleteProductById } from '@/services/product';
    import UpdateProduct from './updateProduct';
export default {
    name: 'ProductDetails',
    components:{
        UpdateProduct,
    },
    props: [
        'product',
        ],
    data(){
        return{
            updateItem: false,
            item: this.product
        }
    },
    computed:{
        
    },
    methods: {
        viewUpdateForm( ) {
                 this.updateItem = !this.updateItem
        },
         productNull(product){
            this.product = product;
        },
        removeTheProduct(){
            deleteProductById( this.product._id )
            .then( () =>  {
                    this.$router.push( { name: 'adminHome' } )  
                     Vue.$toast.open({
                        message: `Product has been successfully deleted`,
                        type: 'success'
                    });
                })
                .catch( error => {
                    Vue.$toast.open({
                        message: error.response.data.message,
                        type: 'error'
                    });
                });
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