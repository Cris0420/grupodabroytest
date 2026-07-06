// ======================================================
// Grupo Dabroy ERP
// Sync Manager
// ======================================================

import { v4 as uuid } from "uuid";

import database from "./database.js";
import offline from "./offline.js";
import network from "./network.js";
import logger from "./logger.js";

class SyncManager {

    constructor(){

        this.running=false;

        this.interval=null;

    }

    start(){

        if(this.interval){

            return;

        }

        logger.info("Sync iniciado");

        this.interval=setInterval(()=>{

            this.sync();

        },5000);

    }

    stop(){

        clearInterval(this.interval);

        this.interval=null;

    }

    async sync(){

        if(this.running){

            return;

        }

        if(!network.isOnline()){

            return;

        }

        this.running=true;

        try{

            const queue=await offline.queue();

            logger.info("Pendientes:",queue.length);

            for(const item of queue){

                await this.process(item);

            }

        }

        catch(error){

            logger.error(error);

        }

        this.running=false;

    }

    async process(item){

        try{

            switch(item.action){

                case "CREATE":

                    await database.create(

                        item.collection,

                        item.document.id,

                        item.document

                    );

                break;

                case "UPDATE":

                    await database.update(

                        item.collection,

                        item.document.id,

                        item.document

                    );

                break;

                case "DELETE":

                    await database.delete(

                        item.collection,

                        item.document.id

                    );

                break;

            }

            await offline.removeQueue(item.id);

            logger.info("Sincronizado",item.document.id);

        }

        catch(error){

            logger.error(error);

        }

    }

    async save(collection,data){

        await offline.save(collection,data);

        if(network.isOnline()){

            await database.save(

                collection,

                data.id,

                data

            );

            return;

        }

        await offline.enqueue({

            id:uuid(),

            action:"CREATE",

            collection,

            document:data

        });

    }

    async update(collection,data){

        await offline.save(collection,data);

        if(network.isOnline()){

            await database.update(

                collection,

                data.id,

                data

            );

            return;

        }

        await offline.enqueue({

            id:uuid(),

            action:"UPDATE",

            collection,

            document:data

        });

    }

    async delete(collection,id){

        await offline.delete(collection,id);

        if(network.isOnline()){

            await database.delete(collection,id);

            return;

        }

        await offline.enqueue({

            id:uuid(),

            action:"DELETE",

            collection,

            document:{id}

        });

    }

    async load(collection){

        if(network.isOnline()){

            const data=await database.all(collection);

            for(const item of data){

                await offline.save(collection,item);

            }

            return data;

        }

        return await offline.getAll(collection);

    }

}

export default new SyncManager();
