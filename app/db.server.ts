import {JSONFileSync, LowSync} from "lowdb";
import type {DBSchema} from "~/types/model.type";

import data from './data.json';

let db: LowSync<DBSchema>;

declare global {
    var __db__: LowSync<DBSchema>;
}

if (!global.__db__) {
    const adapter = new JSONFileSync<DBSchema>('db.json');
    global.__db__ = new LowSync(adapter);
}

db = global.__db__;
db.read();

if (!db.data) {
    db.data = data as DBSchema;
    db.write();
}

export { db };
