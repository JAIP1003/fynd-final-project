const mongoose = require( 'mongoose' );

const { Category } = require( './category' );
const { Owner } = require( './owner' );

const Schema = mongoose.Schema;

const productSchema = new Schema({
    category: {
        type: String
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: "Owner"
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