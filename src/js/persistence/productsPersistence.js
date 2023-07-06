import { getPool } from './database.js';
import { CustomError, CustomErrorType } from '../utils/utils.js';
import { v4 as uuidv4 } from 'uuid';

const INSERT_PRODUCT =
    `INSERT INTO products(id, name, code, amount, description)
                 VALUES (UUID_TO_BIN(?), ?, ?, ?, ?)`;

const SELECT_ALL_PRODUCTS =
    `SELECT * FROM products`;


export async function retrieveProducts() {
    try {
        const [rows] = await getPool().execute(SELECT_ALL_PRODUCTS);
        return rows;
    } catch (err) {
        throw new CustomError(CustomErrorType.DatabaseError,
            'Error retrieving products',
            err);
    }
}

export async function createProduct(product) {
    try {
        product.id = uuidv4();
        await getPool().execute(INSERT_PRODUCT,
            [
                product.id,
                product.name,
                product.code,
                product.amount,
                product.description,
            ]);
        return product;
    } catch (err) {
        throw new CustomError(CustomErrorType.DatabaseError,
            'Error creating product', err);
    }
}

