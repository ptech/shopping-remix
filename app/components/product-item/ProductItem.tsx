import React from "react";

import {Image, ImageWrapper} from './ProductItem.styles';
import {Link} from "@remix-run/react";

import {TProduct} from "~/types/model.type";

type PropTypes = {
    item: TProduct;
};

const ProductItem: React.FC<PropTypes> = (props) => {
    const {item} = props;

    return (
        <article>
            <Link to={`/product/${item.id}`}>
                <ImageWrapper>
                    <Image src={item.image} alt={item.title}/>
                </ImageWrapper>
                <p>{item.title}</p>
                <p>{item.price} €</p>
            </Link>
        </article>
    )
};

export default ProductItem;
