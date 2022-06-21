import {json} from "@remix-run/node";
import {useLoaderData} from "@remix-run/react";

import {getBag, getTotalAmount} from "~/model/bag";

import MiniProductItem from "~/components/mini-product-item/MiniProductItem";

import type {TBagItemDetailed} from "~/types/model.type";
import type { LoaderFunction} from "@remix-run/node";

import {
    Main,
    Content,
    Summary,
} from './Checkout.styles';

type LoaderData = {
    bagItems: TBagItemDetailed[];
    totalAmount: number;
}

export const loader: LoaderFunction = async () => {
    const bagItems = await getBag();
    const totalAmount = await getTotalAmount();

    return json<LoaderData>({
        bagItems,
        totalAmount,
    })
}

const Checkout = () => {
    const { totalAmount, bagItems } = useLoaderData<LoaderData>();

    return (
        <Main>
            <Content>
                TBD
            </Content>
            <Summary>
                <h2>Summary</h2>
                <p><strong>Total Amount:</strong> {totalAmount} €</p>
                <ul>
                    {bagItems.map((item) => (
                        <li key={item.id}>
                            <MiniProductItem product={item} />
                        </li>
                    ))}
                </ul>
            </Summary>
        </Main>
    )
}


export default Checkout;
