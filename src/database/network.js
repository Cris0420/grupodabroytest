class Network {

    constructor(){

        this.online = navigator.onLine;

        window.addEventListener("online",()=>{

            this.online=true;

            console.log("Internet conectado");

        });

        window.addEventListener("offline",()=>{

            this.online=false;

            console.log("Modo Offline");

        });

    }

    isOnline(){

        return this.online;

    }

}

export default new Network();
