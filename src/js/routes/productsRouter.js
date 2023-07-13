import express from 'express';
import { createProduct, retrieveProducts } from '../persistence/productsPersistence.js';

const router = express.Router();

router.put('/', async (req, res) => {
    try {
        req.body.quantity = parseInt(req.body.quantity);
        console.log(req.body);
        const newProduct = await createProduct(req.body);
        return res.json(newProduct);
    } catch (err) {
        console.log(err);
        res.status(500).send('Error creating product');
    }
});

router.get('/', async (req, res) => {
    try {
        const products = await retrieveProducts();
            return res.json(products);
    } catch (err) {
        console.log(err);
        res.status(500).send('Error retrieving product');
    }
})

export default router;