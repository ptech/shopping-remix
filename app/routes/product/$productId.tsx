import type {ActionFunction, LoaderFunction} from "@remix-run/node";
import {getProduct} from "~/model/products";
import invariant from "tiny-invariant";
import {Form, useActionData, useLoaderData, useTransition} from "@remix-run/react";
import {json} from "@remix-run/node";

import type {TProduct} from "~/types/model.type";
import Button from "~/components/button/Button";

import {
    Main,
    ImageWrapper,
    ProductInformation,
    Category,
    Price,
    Description,
} from './ProductDetails.styles';
import Select from "~/components/select/Select";
import {addToBag} from "~/model/bag";
import React, {useEffect, useRef} from "react";

type LoaderData = {
    product: TProduct;
};

type ActionData = {
    quantity: string | null;
};

export const loader: LoaderFunction = async ({params}) => {
    invariant(params.productId, 'Not found');

    const product: TProduct | undefined = await getProduct(params.productId);

    invariant(product, 'Not Found');

    return json<LoaderData>({product});
};

export const action: ActionFunction = async ({request, params}) => {
    invariant(params.productId, 'Not found');

    const formData = await request.formData();
    const data = Object.fromEntries(formData);

    const errors: ActionData = {
        quantity: !data?.quantity ? 'Please select the quantity' : null,
    };

    const hasErrors = Object.values(errors).some((message) => message);

    if (!hasErrors) {
        await addToBag(params.productId, Number(data.quantity));
    }

    return json<ActionData>(errors);
};

const ProductDetails = () => {
    const {product} = useLoaderData<LoaderData>();
    const errors = useActionData<ActionData>();
    const transition = useTransition();
    const isAdding = transition.state === 'submitting';
    const formRef = useRef<HTMLFormElement>(null);

    useEffect(() => {
        if (!isAdding) {
            formRef.current?.reset();
        }
    }, [isAdding])

    return (
        <Main>
            <ImageWrapper>
                <img src={product.image} alt={product.title}/>
            </ImageWrapper>
            <ProductInformation>
                <Category>{product.category}</Category>
                <h1>{product.title}</h1>
                <Price>{product.price} €</Price>
                <Description dangerouslySetInnerHTML={{__html: product.description}}/>
                <Form ref={formRef} method="post" replace>
                    <Select
                        id="quantity"
                        name="quantity"
                        placeholder={'Select quantity'}
                        defaultValue=""
                        error={errors?.quantity}>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                    </Select>
                    <Button primary fullWidth loading={isAdding}>{'Add to Bag'}</Button>
                </Form>
            </ProductInformation>
        </Main>
    );
};

export default ProductDetails;
