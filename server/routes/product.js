const express = require( 'express' );

const router = express.Router();

//const upload = require( '../middlewares/upload-photo');

const { postProduct,
        getProduct,
        updateProduct,
        removeProduct, 
        getProductById} = require( '../controllers/product' );

const { authenticate, authorize } = require( '../middlewares/auth' );

// get request - get all product
router.get( '/', authenticate, getProduct );

// get request - get a single product
router.get( '/:id', authenticate, getProductById );
// router.get( '/:id', getProductById );

// post request - create a new product
router.post( '/' , authenticate, authorize( 'admin' ), /* upload.single("photo"),*/ postProduct );

//patch request - update a single product
router.patch( '/:id', authenticate, authorize( 'admin' ), updateProduct );

//delete request - delete a single product
router.delete( '/:id', authenticate, authorize( 'admin' ), removeProduct );


module.exports = router;
