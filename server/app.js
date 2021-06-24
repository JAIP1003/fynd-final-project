require( './data/init' );
const express = require( 'express' );
const cors = require('cors');

const dotenv = require( 'dotenv' );

const authRouter = require( './routes/auth' );
const productRouter = require( './routes/product' );



const app = express();
app.use(cors());

dotenv.config();

const PORT = process.env.PORT || 4000

app.use( express.json() );
app.use( express.urlencoded( { extended: false } ) );

app.use( '/auth', authRouter );
app.use( '/product', cors() ,productRouter );


if( process.env.NODE_ENV === 'production'){
    app.use( express.static( "aethi/dist"));
}

app.listen( PORT , error => {
    if( error ){
        console.error( error.message );
    }
    console.log( `Server started on http://localhost:${PORT}` );
})