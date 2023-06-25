import { Console } from 'console';
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

//Configure middleware
app.use(express.json({ extended: false }));

//API endpoints
/**
 * @route GET/
 * @desc Test endpoint
 */
app.get('/', (req, res) =>
    res.send('http get request sent to root api endpoint')
);

/**
 * @route POST api/users
 * @desc Register user
 */
app.post('/api/users', (req, res) => {
    console.log(req.body);
    res.send(req.body);
});

//Connection listener
app.listen(3000, () => console.log('Express server running on port 3000'));