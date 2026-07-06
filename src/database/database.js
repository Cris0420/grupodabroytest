// ==========================================================
// Grupo Dabroy ERP
// Database Repository
// ==========================================================

import firebase from "../firebase/firebase.js";

import {
    collection,
    doc,
    setDoc,
    getDoc,
    getDocs,
    updateDoc,
    deleteDoc,
    query,
    where,
    orderBy,
    limit,
    serverTimestamp
} from "firebase/firestore";

class Database {

    constructor(){

        this.db=null;

    }

    get firestore(){

        if(!this.db){

            this.db=firebase.getDB();

        }

        return this.db;

    }

    // =======================================
    // CREATE
    // =======================================

    async create(collectionName,id,data){

        try{

            const ref=doc(this.firestore,collectionName,id);

            data.createdAt=serverTimestamp();

            data.updatedAt=serverTimestamp();

            await setDoc(ref,data);

            return true;

        }catch(error){

            console.error(error);

            return false;

        }

    }

    // =======================================
    // UPDATE
    // =======================================

    async update(collectionName,id,data){

        try{

            const ref=doc(this.firestore,collectionName,id);

            data.updatedAt=serverTimestamp();

            await updateDoc(ref,data);

            return true;

        }

        catch(error){

            console.error(error);

            return false;

        }

    }

    // =======================================
    // SAVE
    // =======================================

    async save(collectionName,id,data){

        const exist=await this.exists(collectionName,id);

        if(exist){

            return await this.update(collectionName,id,data);

        }

        return await this.create(collectionName,id,data);

    }

    // =======================================
    // DELETE
    // =======================================

    async delete(collectionName,id){

        try{

            await deleteDoc(doc(this.firestore,collectionName,id));

            return true;

        }

        catch(error){

            console.error(error);

            return false;

        }

    }

    // =======================================
    // GET
    // =======================================

    async get(collectionName,id){

        try{

            const snap=await getDoc(doc(this.firestore,collectionName,id));

            if(!snap.exists()){

                return null;

            }

            return {

                id:snap.id,

                ...snap.data()

            };

        }

        catch(error){

            console.error(error);

            return null;

        }

    }

    // =======================================
    // EXISTS
    // =======================================

    async exists(collectionName,id){

        const item=await this.get(collectionName,id);

        return item!==null;

    }

    // =======================================
    // ALL
    // =======================================

    async all(collectionName){

        try{

            const docs=await getDocs(collection(this.firestore,collectionName));

            const list=[];

            docs.forEach(doc=>{

                list.push({

                    id:doc.id,

                    ...doc.data()

                });

            });

            return list;

        }

        catch(error){

            console.error(error);

            return [];

        }

    }

    // =======================================
    // ORDER BY
    // =======================================

    async order(collectionName,field){

        const q=query(

            collection(this.firestore,collectionName),

            orderBy(field)

        );

        const docs=await getDocs(q);

        const list=[];

        docs.forEach(doc=>{

            list.push({

                id:doc.id,

                ...doc.data()

            });

        });

        return list;

    }

    // =======================================
    // LIMIT
    // =======================================

    async latest(collectionName,total=20){

        const q=query(

            collection(this.firestore,collectionName),

            limit(total)

        );

        const docs=await getDocs(q);

        const list=[];

        docs.forEach(doc=>{

            list.push({

                id:doc.id,

                ...doc.data()

            });

        });

        return list;

    }

    // =======================================
    // WHERE
    // =======================================

    async where(collectionName,field,operator,value){

        const q=query(

            collection(this.firestore,collectionName),

            where(field,operator,value)

        );

        const docs=await getDocs(q);

        const result=[];

        docs.forEach(doc=>{

            result.push({

                id:doc.id,

                ...doc.data()

            });

        });

        return result;

    }

}

export default new Database();
