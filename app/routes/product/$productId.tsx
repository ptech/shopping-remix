import type {LoaderFunction} from "@remix-run/node";
import type { Product} from "~/models/products";
import {getProduct} from "~/models/products";
import invariant from "tiny-invariant";
import {useLoaderData} from "@remix-run/react";
import {json} from "@remix-run/node";

import { Main, ImageWrapper, ProductInformation, Category } from './ProductDetails.styles';

type LoaderData = {
    product: Product;
};

export const loader: LoaderFunction = async ({ params }) => {
    invariant(params.productId, 'Not found');

    const product: Product = await getProduct(Number(params.productId));

    invariant(product, 'Not Found');

    return json<LoaderData>({ product });
};

const ProductDetails = () => {
    const { product } = useLoaderData<LoaderData>()

    return (
        <Main>
            <ImageWrapper>
                <img src={product.image} alt={product.title} />
            </ImageWrapper>
            <ProductInformation>
                <Category>{product.category}</Category>
                <h1>{product.title}</h1>
                <p>{product.price}</p>
                <div dangerouslySetInnerHTML={{ __html: product.description }} />
            </ProductInformation>
        </Main>
    );
};

export default ProductDetails;
