import express from 'express';
import cors from 'cors'; // Just use in development. In production, set policies correctly!

import productsRouter from './routes/productsRouter.js';

const app = express();

const port = 5000;

app.use(cors()); // Just use in development. In production, set policies correctly!
app.use(express.json());
app.use('/products', productsRouter);

app.listen(port, () => { console.log('Listening on port ' + port); });