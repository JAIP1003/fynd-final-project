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

};

const getProduct = ( req, res, next ) => {
    Product
        .find()
        .then( items => {
                res.json( items ); // comes from imported data/Meetings.json
        })
        .catch( err => {
            err.status = 500;
            return next(err);
        })
};
const getProductById = ( req, res, next ) => {
    const id = req.params.id;

    Product
        .findById( id )
        .then( items => {
                res.json( items ); // comes from imported data/Meetings.json
        })
        .catch( err => {
            err.status = 500;
            return next(err);
        })
};

const updateProduct = ( req, res, next ) => {
    const id = req.params.id;
    const patchProductDetails = req.body;

    Product
        .findByIdAndUpdate( id , patchProductDetails, { runValidators: true} )
        .then( updatedProduct => res.json( updatedProduct ))
        .catch( err => {
            err.status = 500;
            return next(err);
        })
};

const removeProduct = ( req, res, next ) => {
    const id = req.params.id;

    Product
        .findByIdAndRemove( id )
        .then( () => res.status(204).send())
        .catch( err => {
            err.status = 500;
            return next(err);
        })
}

module.exports = {
    postProduct,
    getProduct,
    updateProduct,
    removeProduct,
    getProductById

}