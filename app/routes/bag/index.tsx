import {Form, Link, useLoaderData, useTransition} from "@remix-run/react";
import { json} from "@remix-run/node";
import invariant from "tiny-invariant";

import {getBag, getBagCount, getTotalAmount, removeFromBag} from "~/model/bag";

import type {TBagItemDetailed} from "~/types/model.type";
import type {ActionFunction, LoaderFunction} from "@remix-run/node";

import {
    Ul,
    Li,
    Main,
    StyledButton,
    Wrapper,
    Summary,
    ProceedCheckout
} from './Bag.styles';
import MiniProductItem from "~/components/mini-product-item/MiniProductItem";

type LoaderData = {
    items: TBagItemDetailed[];
    counter: number;
    totalAmount: number;
};

export const loader: LoaderFunction = async () => {
    const bagItems = await getBag();
    const bagCounter = await getBagCount();
    const totalAmount = await getTotalAmount();

    return json<LoaderData>({
        items: bagItems,
        counter: bagCounter,
        totalAmount
    });
};

export const action: ActionFunction = async ({ request }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);

    invariant(data?.id, 'The bag item id is missing');

    if (data?.id) {
        await removeFromBag(data.id as string);
    }

    return json({ message: 'success' });
}

const Bag = () => {
    const { items, totalAmount, counter } = useLoaderData<LoaderData>();
    const transition = useTransition();
    const isRemoving = transition.state === 'submitting';

    return (
        <Main>
            <h1>Bag</h1>
            <Wrapper>
            <Ul>
                {items.length === 0 && (
                    <li>
                        <h2>Your bag is empty</h2>
                        <p>Add to your bag by clicking in the product detail page.</p>
                        <Link to="/shopping">Go to Shopping</Link>
                    </li>
                )}
                {items.map((item) => (
                    <Li key={item.id}>
                        <MiniProductItem product={item}>
                            <Form method="post">
                                <input type="hidden" name="id" value={item.id} />
                                <StyledButton type="submit" aria-label="remove" disabled={isRemoving}>Remove</StyledButton>
                            </Form>
                        </MiniProductItem>
                    </Li>
                ))}
            </Ul>
            {items.length > 0 && (
                <Summary>
                    <h2>Summary</h2>
                    <p><strong>Items:</strong> {counter}</p>
                    <p><strong>Total Amount:</strong> {totalAmount} €</p>
                    <ProceedCheckout to="/checkout">Proceed to Checkout</ProceedCheckout>
                </Summary>
            )}
            </Wrapper>
        </Main>
    )
}

export default Bag;
