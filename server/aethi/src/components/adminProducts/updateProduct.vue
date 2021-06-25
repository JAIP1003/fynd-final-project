<template>
    <div class="container my-4">
        <div class="row">
            <div class="offset-0 offset-md-3 col-12 col-md-6">
                <h1>Please fill updated details of the product </h1>
                <hr />
                <form method="POST" @submit.prevent="updateproduct()" >
                     <div class="form-group">
                        <label for="product-name">Product Name</label>
                        <input
                            type="text"
                            id="name"
                            placeholder="Product Name"
                            class="form-control"
                            v-model="form.name"
                            @blur="$v.form.name.$touch()"
                            :class="{
                            'is-invalid': shouldAppendErrorClass($v.form.name),
                            'is-valid': shouldAppendValidClass($v.form.name),
                            }" />

                        <div v-if="$v.form.name.$error">
                            <div v-if="!$v.form.name.required" class="text-danger">
                            <small>
                                This field is required
                            </small>
                            </div>
                        </div>
                        </div>

                        <div class="form-group">
                        <label for="category">Category</label>
                        <input
                            type="text"
                            id="name"
                            placeholder="category"
                            class="form-control"
                            v-model="form.category"
                            @blur="$v.form.category.$touch()"
                            :class="{
                            'is-invalid': shouldAppendErrorClass($v.form.category),
                            'is-valid': shouldAppendValidClass($v.form.category),
                            }" />

                        <div v-if="$v.form.category.$error">
                            <div v-if="!$v.form.category.required" class="text-danger">
                            <small>
                                This field is required
                            </small>
                            </div>
                        </div>
                        </div>
                         <div class="form-group">
                            <label for="price">Price</label>
                            <input 
                            type="number"
                            class="form-control"
                            id="price"
                            placeholder="Price"
                            v-model="form.price"
                            @blur="$v.form.price.$touch()"
                            :class="{
                            'is-invalid': shouldAppendErrorClass($v.form.price),
                            'is-valid': shouldAppendValidClass($v.form.price),
                            }"
                            />
                            <div v-if="$v.form.price.$error">
                                <div v-if="!$v.form.price.required" class="text-danger">
                                <small>
                                    This field is required
                                </small>
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="stock-quantity">Stock Quantity</label>
                            <input
                            type="number"
                            class="form-control"
                            id="stock-quantity"
                            placeholder="Another input"
                            v-model="form.stockQuantity"
                            @blur="$v.form.stockQuantity.$touch()"
                            :class="{
                            'is-invalid': shouldAppendErrorClass($v.form.stockQuantity),
                            'is-valid': shouldAppendValidClass($v.form.stockQuantity),
                            }"
                            >
                            <div v-if="$v.form.stockQuantity.$error">
                                <div v-if="!$v.form.stockQuantity.required" class="text-danger">
                                <small>
                                    This field is required
                                </small>
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="description">Description</label>
                            <textarea 
                            type="text"
                            class="form-control"
                            id="description"
                            placeholder="description"
                            v-model="form.description"
                            @blur="$v.form.description.$touch()"
                            :class="{
                            'is-invalid': shouldAppendErrorClass($v.form.description),
                            'is-valid': shouldAppendValidClass($v.form.description),
                            }"
                            >
                            </textarea>
                             <div v-if="$v.form.description.$error">
                            <div v-if="!$v.form.description.required" class="text-danger">
                            <small>
                                This field is required
                            </small>
                            </div>
                        </div>
                        </div>
                       
                    <div class="form-group">
                        <button class="btn btn-primary" :disabled="$v.form.$invalid">Update Product</button>
                    </div>
                     <div>
                        <small><router-link to="/" >Go Back</router-link></small>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue';
    import { required } from 'vuelidate/lib/validators'
   import { updateProduct } from '../../services/product';
    export default {
        name: 'UpdateProduct',
        props: [ 
            'item',
             ],
        data() {
            return {
                 form: {
                   ...this.item
                }     
            };
        },
        validations: {
            form: {
                name: {
                    required
                },
                category: {
                    //required
                },
                price:{
                    //required
                },
                stockQuantity:{
                    //required
                },
                description: {
                    //required
                }
            }
        },
         methods: {
           updateproduct(){
            updateProduct({ 
                name: this.form.name,
                category: this.form.category,
                description: this.form.description,
                price: this.form.price,
                stockQuantity: this.form.stockQuantity,
                  }, this.form._id)
                .then( () =>  {
                    this.$router.push( { name: 'home' } )  
                     Vue.$toast.open({
                        message: `Product has been successfully updated`,
                        type: 'success'
                    });
                })
                .catch( error => {
                    Vue.$toast.open({
                        message: error.response.data.message,
                        type: 'error'
                    });
                });    
        },
        shouldAppendValidClass( field ) {
                return !field.$invalid && field.$model && field.$dirty;
            },
        shouldAppendErrorClass( field ) {
                return field.$error;
            }
        }
    }
</script>

<style scoped>
</style>
