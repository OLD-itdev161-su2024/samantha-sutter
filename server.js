import express from 'express';
import connectDatabase from './config/db';

//Intitialize express application
const app = express();

//Connect database
connectDatabase();

//API endpoints
app.get('/', (req, res) =>
    res.send('http get request sent to root api endpoint')
);

//Connection listener
const port = 5000;
app.listen(port, () => console.log(`Express server running on port ${port}`));