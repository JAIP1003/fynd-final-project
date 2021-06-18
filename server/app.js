require( './data/init' );
const express = require( 'express' );

const dotenv = require( 'dotenv' );

const authRouter = require( './routes/auth' );



const app = express();
dotenv.config();

const PORT = process.env.PORT || 4000

app.use( express.json() );
app.use( express.urlencoded( { extended: false } ) );

app.use( '/auth', authRouter );


app.listen( PORT , error => {
    if( error ){
        console.error( error.message );
    }
    console.log( `Server started on http://localhost:${PORT}` );
})