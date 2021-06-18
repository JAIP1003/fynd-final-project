const express = require( 'express' );

const router = express.Router();

const upload = require( '../middlewares/upload-photo');

//   getProduct,
//     getProductById,
   
//     delelteProductById,
//     updateProductById
const { postProduct } = require( '../controllers/product' );

// get request - get all product
// router.get( '/', getProduct );

// get request - get a single product

// router.get( '/:id', getProductById );

// post request - create a new product
router.post( '/', upload.single("photo"), postProduct );

//patch request - update a single product
// router.updateProductById( '/:Id', updateProductById );

//delete request - delete a single product
// router.deleteProductById( '/:Id', delelteProductById );


module.exports = router;
