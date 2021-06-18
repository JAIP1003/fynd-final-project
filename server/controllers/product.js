const mongoose = require( 'mongoose' );

const Product = mongoose.model('Product');

const postProduct = ( req, res, next ) => {
    const product = req.body;
    // const photo = req.file.loaction;

    if( !product ){
        const error = new Error( ' Product details not sent in the request body' );
        return next( error);
    }

    Product
        .create( product )
        .then( updatedProduct => {
            res.status( 201 ).json( updatedProduct );
        })
        .catch( err => {
            res.status = 505;
            return next( err );
        })

}

module.exports = {
    postProduct
}