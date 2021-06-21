const express = require( 'express' );

const router = express.Router();

//const upload = require( '../middlewares/upload-photo');

const { postProduct,
        getProduct,
        updateProduct,
        removeProduct } = require( '../controllers/product' );

// get request - get all product
router.get( '/', getProduct );

// get request - get a single product

// router.get( '/:id', getProductById );

// post request - create a new product
router.post( '/',/* upload.single("photo"),*/ postProduct );

//patch request - update a single product
router.patch( '/:Id', updateProduct );

//delete request - delete a single product
router.delete( '/:Id', removeProduct );


module.exports = router;
