import type {FC, ReactNode} from "react";
import type { TBagItemDetailed } from "~/types/model.type";
import styled from "@emotion/styled";

type PropTypes = {
    children?: ReactNode;
    product: TBagItemDetailed;
}

const Article = styled.article`
    display: flex;
`;

const Img = styled.img`
    width: 25%;
    height: 100%;
`;

const InfoWrapper = styled.div`
  flex: 1;
  padding-left: 3rem;
`

const MiniProductItem: FC<PropTypes> = (props) => {
    const { children, product } = props;
    return (
        <Article>
            <Img src={product.image} alt={product.title} />
            <InfoWrapper>
                <p>{product.title}</p>
                <p>Price: {product.price} €</p>
                <p>Quantity: {product.quantity}</p>
                {children}
            </InfoWrapper>
        </Article>
    )
}

export default MiniProductItem;
