// ======================================================
// Grupo Dabroy ERP
// Firebase Manager
// ======================================================

import { initializeApp } from "firebase/app";

import {
    getFirestore,
    enableIndexedDbPersistence,
    connectFirestoreEmulator
} from "firebase/firestore";

import {
    getAuth,
    signInAnonymously,
    onAuthStateChanged
} from "firebase/auth";

import {
    getStorage
} from "firebase/storage";

class FirebaseManager {

    constructor(){

        this.app=null;
        this.db=null;
        this.auth=null;
        this.storage=null;

        this.user=null;

        this.initialized=false;

    }

    async initialize(config){

        if(this.initialized){

            return this;

        }

        this.app=initializeApp(config);

        this.db=getFirestore(this.app);

        this.auth=getAuth(this.app);

        this.storage=getStorage(this.app);

        try{

            await enableIndexedDbPersistence(this.db,{
                synchronizeTabs:true
            });

            console.log("Firestore Offline Enabled");

        }

        catch(e){

            console.warn(e);

        }

        await signInAnonymously(this.auth);

        onAuthStateChanged(this.auth,(user)=>{

            this.user=user;

            if(user){

                console.log("Firebase Login:",user.uid);

            }

        });

        this.initialized=true;

        return this;

    }

    getDB(){

        return this.db;

    }

    getAuth(){

        return this.auth;

    }

    getStorage(){

        return this.storage;

    }

    getUser(){

        return this.user;

    }

}

const firebase=new FirebaseManager();

export default firebase;
