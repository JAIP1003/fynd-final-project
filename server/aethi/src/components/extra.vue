<template>
    <div class="add-form">
        <div>
        <h3>Please fill the details of the product!</h3>
        </div>
    <form>
        <div class="form-group">
            <label for="product-name">Product Name</label>
            <input 
            type="text" 
            class="form-control" 
            id="product-name" 
            placeholder="Product Name"
            v-model="form.name"
                            @blur="$v.form.name.$touch()"
                            :class="{
                            'is-invalid': shouldAppendErrorClass($v.form.name),
                            'is-valid': shouldAppendValidClass($v.form.name),
                            }"
            />
        </div>
        <div class="form-group">
            <label for="category">Category</label>
            <input type="text" class="form-control" id="category" placeholder="Category">
        </div>
         <div class="form-group">
            <label for="price">Price</label>
            <input type="number" class="form-control" id="price" placeholder="Price">
        </div>
         <div class="form-group">
            <label for="stock-quantity">Stock Quantity</label>
            <input type="number" class="form-control" id="stock-quantity" placeholder="Another input">
        </div>
         <div class="form-group">
            <label for="description">Description</label>
            <textarea type="text" class="form-control" id="description" placeholder="Another input"></textarea>
        </div>
        <button class="btn btn-primary" type="submit">Summit</button>
    </form>
    </div>
</template>

<script>
    import Vue from 'vue';
    import { email, required, minLength } from 'vuelidate/lib/validators'
    import { addProduct } from '@/services/product';
export default {
    name: 'AddProduct',
    data() {
            return {
                processing: false,
                form: {
                    name: '',
                    userType: '',
                    email: '',
                    password: ''
                }
            };
        },
        validations: {
            form: {
                name: {
                    required
                },
                 userType: {
                    required
                },
                email: {
                    email,
                    required
                },
                password: {
                    required,
                    minLength: minLength( 8 ),
                    containsUppercase: function(value) {
                        return /[A-Z]/.test(value)
                    },
                    containsLowercase: function(value) {
                        return /[a-z]/.test(value)
                    },
                    containsNumber: function(value) {
                        return /[0-9]/.test(value)
                    },
                    containsSpecial: function(value) {
                        return /[#?!@$%^&*-]/.test(value)
                    }
                }
            }
        },
         methods: {
           signup(){
            registerUser({ name: this.form.name, email: this.form.email, password: this.form.password, role: this.form.userType  })
                .then( () =>  this.$router.push( { name: 'login' } )  )
                .catch( error => {
                    Vue.$toast.open({
                        message: error.response.data.message,
                       // duration: config.toastDuration,
                        type: 'error'
                    });
                });    
        },
            shouldAppendValidClass( field ) {
                console.log( field );
                return !field.$invalid && field.$model && field.$dirty;
            },
            shouldAppendErrorClass( field ) {
                return field.$error;
            }
        }   
}
</script>

<style scoped>
.add-form{
    margin: 50px 20%;
}
</style>