import {db} from "~/db.server";
import invariant from "tiny-invariant";
import type {TBagItem, TBagItemDetailed} from "~/types/model.type";
import {uuid} from "uuidv4";

// TODO: Remove uuid ---> Math.random().toString(32).slice(2)

export const getBag = async (): Promise<TBagItemDetailed[]> => {
    try {
        const products = db.data.products;
        const bagItems = db.data.user.bag;

        return bagItems.map((item) => {
            const product = products.find((product) => product.id === item.productId);

            if (!product) {
                return undefined;
            }

            return {
                ...product,
                ...item
            };
        }).filter((item: TBagItemDetailed | undefined): item is TBagItemDetailed => !!item);

    } catch (error) {
        throw error;
    }
}

export const getBagCount = async () => {
    const bagItems = db.data.user.bag;
    let counter = 0;

    if (!bagItems) {
        return counter;
    }

    bagItems.forEach((item) => {
        counter += item.quantity;
    });

    return counter;
};

export const addToBag = async (productId: string, quantity: number = 1) => {
    invariant(productId, 'Product id is missing');
    invariant(quantity, 'Quantity is missing');

    try {
        const product = db.data.products.find((item) => item.id === productId);

        invariant(product, 'Product not found');

        let bagItems = db.data.user.bag;

        const bagItem = bagItems.find((item) => item.productId === productId);

        await new Promise((res) => setTimeout(res, 800));


        if (bagItem) {
            bagItems = bagItems.map((item) => item.productId === productId ? ({
                ...item,
                quantity: item.quantity + quantity
            }) : item);
        } else {
            const payload: TBagItem = {
                productId,
                quantity,
                id: uuid(),
            }
            bagItems.push(payload);
        }

        db.data.user.bag = bagItems;
        db.write();
    } catch (error) {
        throw error;
    }

}

export const removeFromBag = async (id: string) => {
    try {
        db.data.user.bag = db.data.user.bag.filter((item) => item.id !== id);
        db.write();
    } catch (error) {
        throw error;
    }
}
