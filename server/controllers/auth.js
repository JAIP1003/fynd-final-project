const mongoose = require( 'mongoose' );

const User = mongoose.model('User');


const register = ( req, res, next ) => {
    const user = req.body;

    if( !user ){
        const error = new Error( "User's details not sent in the request body");
        next( error );
        return;
    }

    User
        .create( user )
        .then( updatedUser => {
            res.status( 201 ).json( updatedUser );
        })
        .catch( err => {
            // if( err.name === 'ValidationError' ){
            //     err.status = 400;
            // }
            // else{
            //     err.status = 500;
            // }
            return next( err );
        });
}

const login = ( req, res, next ) => {
    const user = req.body;

    if( !user ){
        const error = new Error( 'User details not sent in the request body' );
        return next( error );
    }

    if( !user.email || !user.password ){
        const error = new Error( 'User details not sent in the request body' );
        return next( error );
    }

    User
        .findOne( user )
        .then( user => {
            if( !user ){
                const error = new Error( ' no matching credentials' );
                error.status = 404;
                return next( error );
            }

            res.status( 201 ).json( user );
        })
        .catch( err => {
            if( err.name === 'ValidationError'){
                err.status = 400;
            }
            else{
                err.status = 500;
            }
            return next( err );
        });

}


module.exports = {
    register,
    login
}
