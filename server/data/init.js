const mongoose = require( 'mongoose' );

const dotenv = require( 'dotenv' );


require( '../models/user');

dotenv.config();



const url = process.env.DATABASE;

mongoose.set( 'useFindAndModify', false );
mongoose.set( 'returnOriginal', false );

mongoose.connect( url, { useNewUrlParser: true, useUnifiedTopology: true } );


mongoose.connection.on( 'open',() => {
    console.log( `Connection to DB has been established`);
});

mongoose.connection.on( 'error', (err) => {
    console.error ( err.messsage);
    process.exit(2);
})