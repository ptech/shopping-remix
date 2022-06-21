import {db} from "~/db.server";
import {uuid} from "uuidv4";

import type {TAddress} from "~/types/model.type";

export type TNewAddress = Omit<TAddress, 'id'>;

export const getAddresses = async (): Promise<TAddress[]> => {
    try {
        return db.data.user.addresses;
    } catch (error) {
        throw error;
    }
}

export const getAddress = async (id: string): Promise<TAddress | undefined> => {
    try {
        return db.data.user.addresses.find((item) => item.id === id);
    } catch (error) {
        throw error;
    }
}

export const addAddress = async (data: TNewAddress) => {
    try {
        db.data.user.addresses.push({
            ...data,
            id: uuid(),
        });

        db.write();
    } catch (error) {
        throw error;
    }
}

export const updateAddress = async (id: string, data: TNewAddress) => {
    try {
        db.data.user.addresses = db.data.user.addresses.map((item) =>
            item.id === id ? { ...data, id } : item
        );

        db.write();
    } catch (error) {
        throw error;
    }
}

export const deleteAddress = async (id: string) => {
    try {
        db.data.user.addresses = db.data.user.addresses.filter((item) => item.id !== id);

        db.write();
    } catch (error) {
        throw error;
    }
}
