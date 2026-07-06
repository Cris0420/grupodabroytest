import OrdersUI from "../ui/orders.js";

class App {

    async init(){

        console.log("Iniciando aplicación...");

        await OrdersUI.load();

    }

}

export default new App();
