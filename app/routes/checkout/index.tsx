import {json, LoaderFunction} from "@remix-run/node";
import {getBag, getTotalAmount} from "~/model/bag";
import {TBagItemDetailed} from "~/types/model.type";
import {useLoaderData} from "@remix-run/react";
import MiniProductItem from "~/components/mini-product-item/MiniProductItem";

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
