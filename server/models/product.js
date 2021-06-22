const mongoose = require( 'mongoose' );

const Schema = mongoose.Schema;

const productSchema = new Schema({
    category: {
        type: String
    },
    ownerId: {
        type: String,
        required: true,
        unique: true
    },
    name: { 
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    photo: {
        type: String,

    },
    price: {
        type: Number,

    },
    stockQuantity: {
        type: Number
    },
    rating: [ Number ]
});

mongoose.model( 'Product', productSchema );