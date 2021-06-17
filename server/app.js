const express = require( 'express' );
const morgan = require( 'morgan' );
const bodyParser = require( 'body-parser' );
const { urlencoded } = require('body-parser');

const app = express();

const port = process.env.PORT || 3000

app.use( express.json() );
// app.use( morgan );

// app.use(bodyParser.json());
app.use( express.urlencoded( { extended: false } ) );


app.listen( port , error => {
    if( error ){
        console.error( error.message );
    }
    console.log( `server is running at ${port} `);
})