const jwt = require( 'jsonwebtoken' );

const authenticate = ( req, res, next ) => {
    const token = req.header( 'Authorization' );

    if( !token ){
        const error = new Error( 'Go away intruder' );
        error.status = 401;
        return next( error );
    }

    jwt.verify( token, 'abcd', ( err, claims ) => {
        if( err ){
            const error = new Error( 'Go away intruder' );
            return next( err );
        }
        res.locals.claims = claims;
        next();
    })
}
function authorize( role ){
    return function( req, res, next ) {
    const claims = res.locals.claims;

    if( claims.role !== role ){
        const error = new Error( 'You are not authorized' );
        error.status = 403;
        return next( error );
    }

    next()
}
}

module.exports = {
    authenticate,
    authorize
}