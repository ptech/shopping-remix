export type Gender = 'men' | 'woman' | 'unisex'

export type TProduct = {
    id: string;
    title: string;
    price: number;
    category: string;
    gender: Gender;
    description: string;
    image: string;
    rating: {
        rate: number;
        count: number;
    }
};

export type TAddress = {
    id: number;
    name: string;
    addressLine: string;
    postalCode: string;
    phoneNumber: number;
};

export type TOrders = {
    id: string;
    amount: number;
    shippingAddress: TAddress;
    billingAddress: TAddress;
    products: TProduct[];
};

export type TBagItem = {
    id: string;
    productId: string;
    quantity: number;
}

export type TBagItemDetailed = TBagItem & TProduct;

export type TUser = {
    name: string;
    email: string;
    phoneNumber?: number;

    addresses: TAddress[];
    bag: TBagItem[];
    orders: TOrders[];
}

export type DBSchema = {
    user: TUser;
    products: TProduct[];
    categories: string[];
}
