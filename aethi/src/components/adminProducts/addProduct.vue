<template>
    <div class="add-form">
        <div>
        <h3>Please fill the details of the product!</h3>
        </div>
    <form>
        <div class="form-group">
            <label for="product-name">Product Name</label>
            <input type="text" class="form-control" id="product-name" placeholder="Product Name">
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
export default {
    name: 'AddProduct'
    
}
</script>

<style scoped>
.add-form{
    margin: 50px 20%;
}
</style>