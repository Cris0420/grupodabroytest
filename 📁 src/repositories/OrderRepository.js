// ======================================================
// Grupo Dabroy ERP
// Order Repository
// ======================================================

import sync from "../database/sync.js";

class OrderRepository {

    constructor(){

        this.collection="orders";

    }

    async create(order){

        return await sync.save(

            this.collection,

            order

        );

    }

    async update(order){

        return await sync.update(

            this.collection,

            order

        );

    }

    async delete(id){

        return await sync.delete(

            this.collection,

            id

        );

    }

    async all(){

        return await sync.load(

            this.collection

        );

    }

    async find(id){

        const orders=await this.all();

        return orders.find(x=>x.id===id);

    }

    async pending(){

        const orders=await this.all();

        return orders.filter(x=>x.status==="PENDING");

    }

    async completed(){

        const orders=await this.all();

        return orders.filter(x=>x.status==="COMPLETED");

    }

    async cancelled(){

        const orders=await this.all();

        return orders.filter(x=>x.status==="CANCELLED");

    }

    async byMechanic(id){

        const orders=await this.all();

        return orders.filter(x=>x.mechanicId===id);

    }

    async byWorkshop(id){

        const orders=await this.all();

        return orders.filter(x=>x.workshopId===id);

    }

    async search(text){

        const orders=await this.all();

        const value=text.toLowerCase();

        return orders.filter(order=>{

            return JSON.stringify(order)

                .toLowerCase()

                .includes(value);

        });

    }

}

export default new OrderRepository();
