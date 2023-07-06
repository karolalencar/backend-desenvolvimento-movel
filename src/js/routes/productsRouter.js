import express from 'express';
import { createProduct, retrieveProducts } from '../persistence/productPersistence.js';

const router = express.Router();

router.put('/', async (req, res) => {
    try {
        /*if (req.body.id) {
            const updatedCliente = await updateCliente(req.body);
            return res.json(updatedCliente);

        } else {*/
            const newProduct = await createProduct(req.body);
            return res.json(newProduct);
        /*}*/
    } catch (err) {
        console.log(err);
        res.status(500).send('Error creating product');
    }
});

router.get('/', async (req, res) => {
    try {
        const products = await retrieveProducts();
        /*if (clientes) {*/
            return res.json(products);
        /*} else {
            res.status(404).send('Client does not exist');
        }*/
    } catch (err) {
        console.log(err);
        res.status(500).send('Error retrieving product');
    }
})

export default router;