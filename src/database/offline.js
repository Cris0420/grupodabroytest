// =====================================================
// Grupo Dabroy ERP
// Offline Database Manager
// IndexedDB
// =====================================================

import { openDB } from "idb";

class OfflineDatabase {

    constructor() {

        this.db = null;

    }

    async init() {

        if (this.db) return this.db;

        this.db = await openDB("dabroy-erp", 1, {

            upgrade(db) {

                if (!db.objectStoreNames.contains("orders")) {

                    const store = db.createObjectStore("orders", {

                        keyPath: "id"

                    });

                    store.createIndex("status", "status");

                    store.createIndex("updatedAt", "updatedAt");

                }

                if (!db.objectStoreNames.contains("syncQueue")) {

                    db.createObjectStore("syncQueue", {

                        keyPath: "id"

                    });

                }

                if (!db.objectStoreNames.contains("users")) {

                    db.createObjectStore("users", {

                        keyPath: "id"

                    });

                }

                if (!db.objectStoreNames.contains("products")) {

                    db.createObjectStore("products", {

                        keyPath: "id"

                    });

                }

                if (!db.objectStoreNames.contains("history")) {

                    db.createObjectStore("history", {

                        keyPath: "id"

                    });

                }

            }

        });

        return this.db;

    }

    async save(storeName, data) {

        const db = await this.init();

        return db.put(storeName, data);

    }

    async get(storeName, id) {

        const db = await this.init();

        return db.get(storeName, id);

    }

    async getAll(storeName) {

        const db = await this.init();

        return db.getAll(storeName);

    }

    async delete(storeName, id) {

        const db = await this.init();

        return db.delete(storeName, id);

    }

    async clear(storeName) {

        const db = await this.init();

        return db.clear(storeName);

    }

    async exists(storeName, id) {

        const db = await this.init();

        const item = await db.get(storeName, id);

        return item !== undefined;

    }

    async count(storeName) {

        const db = await this.init();

        return db.count(storeName);

    }

    async enqueue(action) {

        const db = await this.init();

        return db.put("syncQueue", action);

    }

    async queue() {

        const db = await this.init();

        return db.getAll("syncQueue");

    }

    async removeQueue(id) {

        const db = await this.init();

        return db.delete("syncQueue", id);

    }

}

export default new OfflineDatabase();
