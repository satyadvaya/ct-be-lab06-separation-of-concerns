const Order = require('../models/Order');
const { sendSms } = require('../utils/twilio');

module.exports = class OrderService {
    //send a text and store the order

    static async createOrder({ quantity }) {
        //send text
        await sendSms(
            process.env.ORDER_HANDLER_NUMBER,
            `New Order received for ${quantity}`
        );

        //store the order
        const order = await Order.insert({ quantity });
        return order;
    }

    static async getAllOrders() {
        //send text
        await sendSms(process.env.ORDER_HANDLER_NUMBER, 'Got all orders');

        //store the order
        const orders = await Order.getAll();
        return orders;
    }

    static async getOrderById(id) {
        //send text
        await sendSms(
            process.env.ORDER_HANDLER_NUMBER,
            `Got a particular order: ${id}`
        );

        //store the order
        const order = await Order.getOrder(id);
        return order;
    }

    static async patchOrderById(id, quantity) {
        //send text
        await sendSms(
            process.env.ORDER_HANDLER_NUMBER,
            `Updated a particular order: ${id} to quantity: ${quantity}`
        );

        //store the order
        const order = await Order.patchOrder(id, quantity);
        return order;
    }
};
