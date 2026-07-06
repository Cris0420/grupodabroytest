import firebase from "./firebase/firebase.js";
import firebaseConfig from "./config/firebaseConfig.js";

import sync from "./database/sync.js";

import App from "./core/app.js";

async function start(){

    await firebase.initialize(firebaseConfig);

    sync.start();

    await App.init();

}

start();
