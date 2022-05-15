import {ActionFunction, json, LoaderFunction} from "@remix-run/node";
import {getBag, getBagCount, removeFromBag} from "~/model/bag";
import {TBagItemDetailed} from "~/types/model.type";
import {Form, Link, useLoaderData, useTransition} from "@remix-run/react";

import {Ul, Li, Img, InfoWrapper, Main, StyledButton} from './Bag.styles';
import invariant from "tiny-invariant";

type LoaderData = {
    items: TBagItemDetailed[];
    counter: number;
};

export const loader: LoaderFunction = async () => {
    const bagItems = await getBag();
    const bagCounter = await getBagCount();

    return json<LoaderData>({
        items: bagItems,
        counter: bagCounter
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
    const { items } = useLoaderData<LoaderData>();
    const transition = useTransition();
    const isRemoving = transition.state === 'submitting';

    return (
        <Main>
            <h1>Bag</h1>
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
                        <Img src={item.image} alt={item.title} />
                        <InfoWrapper>
                            <p>{item.title}</p>
                            <p>Price: {item.price} €</p>
                            <p>Quantity: {item.quantity}</p>
                            <Form method="post">
                                <input type="hidden" name="id" value={item.id} />
                                <StyledButton type="submit" aria-label="remove" disabled={isRemoving}>Remove</StyledButton>
                            </Form>
                        </InfoWrapper>
                    </Li>
                ))}
            </Ul>
        </Main>
    )
}

export default Bag;
