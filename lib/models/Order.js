const pool = require('../utils/pool');

module.exports = class Order {
    id;
    quantity;

    constructor(row) {
        this.id = row.id;
        this.quantity = row.quantity;
    }

    static async insert({ quantity }) {
        const { rows } = await pool.query(
            'INSERT INTO orders (quantity) VALUES ($1) RETURNING *',
            [quantity]
        );
        return new Order(rows[0]);
    }

    static async getAll() {
        const { rows } = await pool.query('SELECT * FROM orders');
        return rows.map((row) => {
            return new Order(row);
        });
    }

    static async getOrder(id) {
        const { rows } = await pool.query(
            'SELECT * FROM orders WHERE id = ($1)',
            [id]
        );
        return new Order(rows[0]);
    }

    static async patchOrder(id, quantity) {
        const { rows } = await pool.query(
            'UPDATE orders SET quantity = ($2) WHERE id = ($1) RETURNING *',
            [id, quantity]
        );
        return new Order(rows[0]);
    }

    static async deleteOrder(id) {
        const { rows } = await pool.query(
            'DELETE FROM orders WHERE id = ($1) RETURNING *',
            [id]
        );
        return new Order(rows[0]);
    }
};

//Instance method
//arr.map(), arr.filter()

//static methods
//Order.insert();
