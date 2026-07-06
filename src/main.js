import firebase from "./firebase/firebase.js";

import firebaseConfig from "./config/firebaseConfig.js";

async function start(){

    await firebase.initialize(firebaseConfig);

    console.log("Sistema iniciado");

}

start();
