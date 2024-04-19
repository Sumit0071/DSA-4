require( 'dotenv' ).config(); // Load environment variables

const express = require( 'express' );
const mongoose = require( 'mongoose' );
const axios = require( 'axios' );
const cors = require( 'cors' );

const app = express();
const PORT = process.env.PORT || 5000;
const uri = process.env.MONGODB_URI;
const { exec } = require( 'child_process' );
// MongoDB connection
main().catch( err => console.log( err ) );

async function main() {
    try {
        await mongoose.connect( uri );
        console.log( 'db connected successfully' )
    } catch ( e ) {
        console.log( 'error in connecting the database: ', e );
    }
}

const FormData = mongoose.model( 'FormData', {
    name: String,
    discordId: String,
    serverName: String,
    gradYear: String,
    collegeName: String,
    companyName: String,
    formDataArray: [String],
} );

app.use( express.json() );
app.use( cors() );

app.post( '/saveFormData', async ( req, res ) => {
    try {
        const formData = new FormData( req.body );
        await formData.save();
        res.status( 201 ).send( 'Form data saved successfully.' );
    } catch ( error ) {
        res.status( 400 ).send( 'Error saving form data.' );
    }
} );

// Retrieve saved responses and generate output
app.post('/generateOutput', async (req, res) => {
    try {
        // Find the most recent saved form data
        console.log('Received generateOutput request:', req.body);
        const mostRecentFormData = await FormData.findOne().sort({ _id: -1 });

        if (!mostRecentFormData) {
            return res.status(404).send('No form data found.');
        }

        // Extract the formDataArray from the most recent data
        const { formDataArray } = mostRecentFormData;
        const inputData = String(formDataArray);
        // Execute roadmap.js with formDataArray as input

        exec(`node roadmap.js "${inputData}"`, (err, stdout) => {
            if (err) {
                console.error("Error executing roadmap.js ", err);
                res.status(500).send('Error executing roadmap.js.');
                return;
            }

            console.log(stdout); // Log the output from roadmap.js
            res.status(200).json({ output: stdout }); // Send the roadmap output as JSON
        });
    } catch (error) {
        res.status(500).send('Error generating output.', error);
        console.error('Error generating output:', error); // Log any caught errors
        res.status(500).send('Error generating output.');
    }
});

app.listen( PORT, '0.0.0.0', () => {
    console.log( `Server running on port ${PORT}` );
} );

app.get( '/', ( req, res ) => {
    res.send( 'Welcome to the backend server!' );
} );
app.get( '/saveFormData', ( req, res ) => {
    res.send( 'Welcome to the backend server!' );
} );
app.use( ( err, req, res, next ) => {
    console.error( 'Unhandled error:', err );
    res.status( 500 ).send( 'Internal Server Error' );
} );