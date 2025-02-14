import { CREATED, OK } from 'http-status-codes';
import { getAllOrders, getOrders as handleGetUserorders, handleOrder } from '../service/order.js';

export async function placeOrder(req,res) {
    let orderInfo=await handleOrder({...req.body,user: req.user.id});
    res.status(CREATED).send(orderInfo)
}
export async function sendOrders(req,res) {
    let orders=await handleGetUserorders(req.user.id);
    res.status(OK).send(orders)
}
export async function getOrders(_,res) {
    let orders=await getAllOrders();
    res.status(OK).send(orders)
}