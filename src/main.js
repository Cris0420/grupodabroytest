import firebase from "./firebase/firebase.js";
import firebaseConfig from "./config/firebaseConfig.js";
import sync from "./database/sync.js";

async function start(){

    await firebase.initialize(firebaseConfig);

    sync.start();

    console.log("Grupo Dabroy ERP iniciado");

}

start();
