// ======================================================
// Grupo Dabroy ERP
// Orders UI Controller
// ======================================================

import OrderService from "../services/OrderService.js";

class OrdersUI {

    constructor(){

        this.orders=[];

    }

    async load(){

        this.orders=await OrderService.list();

        this.render();

    }

    async newOrder(){

        const order=await OrderService.create();

        return order;

    }

    async save(order){

        await OrderService.save(order);

        await this.load();

    }

    async update(order){

        await OrderService.update(order);

        await this.load();

    }

    async remove(id){

        await OrderService.delete(id);

        await this.load();

    }

    async search(text){

        this.orders=await OrderService.search(text);

        this.render();

    }

    render(){

        const tbody=document.getElementById("ordersTable");

        if(!tbody){

            return;

        }

        tbody.innerHTML="";

        this.orders.forEach(order=>{

            const tr=document.createElement("tr");

            tr.innerHTML=`

                <td>${order.number}</td>

                <td>${order.customer?.name ?? ""}</td>

                <td>${order.vehicle?.plate ?? ""}</td>

                <td>${order.status}</td>

                <td>

                    <button
                        class="btn btn-primary"
                        data-id="${order.id}"
                        data-action="edit">

                        Editar

                    </button>

                </td>

            `;

            tbody.appendChild(tr);

        });

    }

}

export default new OrdersUI();
