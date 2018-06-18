import Express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import mongoose from 'mongoose';
import cors from 'cors';
import path from 'path';
import todoRoute from './routes/todo';

// Initialize the Express app.
const app = new Express();

// Apply middleware.
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(cors());

// Set up end points.
app.use('/todos', todoRoute);
app.use('/', Express.static(path.join(__dirname, '../dist/public')));

// Connect database.
mongoose.connect(
    'mongodb://localhost',
    { dbName: 'taskmanager', user: '', password: '' },
    err => {
        if (err) {
            throw err;
        }
        console.log('Connected to the "taskmanager" database.');
    }
);

// Run server.
app.listen(8000, function() {
    console.log('The server is now running on port 8000.');
});
