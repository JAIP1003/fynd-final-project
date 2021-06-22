const mongoose = require( 'mongoose' );
const jwt = require( 'jsonwebtoken' );

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
            if( err.name === 'ValidationError' ){
                err.status = 400;
            }
            else{
                err.status = 500;
            }
            return next( err );
        });
}

const login = ( req, res, next ) => {
    const u = req.body;

    if( !u ){
        const error = new Error( 'User details not sent in the request body' );
        return next( error );
    }

    if( !u.email || !u.password ){
        const error = new Error( 'User details not sent in the request body' );
        return next( error );
    }

    User
        .findOne( { email: u.email } )
        .then( user => {
            if( !user ){
                const error = new Error( ' no matching credentials' );
                error.status = 404;
                return next( error );
            }

            user.checkPassword( u.password , ( err, isMatch ) => {
                            //generate the token
                if( err){
                    const error = new Error( ' no matching credentials' );
                    error.status = 404;
                    return next( error );
                }

                if( !isMatch ){
                    const error = new Error( ' no matching credentials' );
                    error.status = 404;
                    return next( error );
                }
                const claims = {
                    name: user.name,
                    email: user.email,
                    role: user.role
                };

                jwt.sign( claims, 'abcd', ( err, token ) => {
                    if( err ){
                        err.status = 500;
                        return next( err );
                    }
                    res.json({
                        email: user.email,
                        token: token
                    });
                });
            })

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
