// ======================================================
// Grupo Dabroy ERP
// Order Service
// ======================================================

import OrderRepository from "../repositories/OrderRepository.js";

import Order from "../models/Order.js";

class OrderService{

    async create(){

        const order=new Order();

        return order;

    }

    async save(order){

        return await OrderRepository.create(order);

    }

    async update(order){

        return await OrderRepository.update(order);

    }

    async delete(id){

        return await OrderRepository.delete(id);

    }

    async list(){

        return await OrderRepository.all();

    }

    async search(value){

        return await OrderRepository.search(value);

    }

}

export default new OrderService();
