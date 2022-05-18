import type {HeadersFunction, LoaderFunction, MetaFunction} from "@remix-run/node";
import {Link, useLoaderData, useLocation, useParams} from "@remix-run/react";
import {json, Response} from "@remix-run/node";

import {getCategories, getProducts, getProductsByParams} from "~/model/products";

import ProductItem from "~/components/product-item/ProductItem";

import {
    FilterBar,
    SelectedCategory,
    DropPanel,
    Span,
    FilterOptions,
    SortOptions,
    ProductWrapper
} from './Shopping.styles';
import type {TProduct} from "~/types/model.type";

type Option = {
    value: string;
    text: string;
};

type LoaderData = {
    products: TProduct[];
    categories: string[];
    genders: string[];
    sort: Option[];
};

export const loader: LoaderFunction = async ({params, request}) => {
    const url = new URL(request.url);
    const sort: string | null = url.searchParams.get('sort');

    const products = !params['*']
        ? getProducts(sort)
        : getProductsByParams({category: params['*']}, sort);

    if (!products || !products.length) {
        throw new Response("Not Found", {status: 404});
    }

    return json<LoaderData>({
        products,
        categories: getCategories(),
        genders: ['men', 'woman', 'unisex'],
        sort: [{
            value: 'asc',
            text: 'Price (Low to High)'
        }, {
            value: 'desc',
            text: 'Price (High to Low)'
        }]
    });
}

export const headers: HeadersFunction = () => {
    return {
        "X-Where-Are-You": "Switch Party",
    };
};

export const meta: MetaFunction = ({ data, params }) => {
    const category = params['*'];

    if (!data) {
        return {
            title: 'Missing Shopping',
            description: `The is no products with the category "${category}"`,
        };
    }

    return {
        title: category ? `Shopping - ${category}` : 'Shopping',
        description: 'This is a real shopping page!!'
    };
}

const Shopping = () => {
    const params = useParams();
    const {pathname} = useLocation();
    const {products = [], categories = [], sort} = useLoaderData<LoaderData>();
    const selectedCategory = params['*'];

    return (
        <main>
            <FilterBar>
                <DropPanel>
                    <Span>Filter by</Span><SelectedCategory>{selectedCategory}</SelectedCategory>
                    <FilterOptions>
                        <li key="all">
                            <Link to={'/shopping'}>All</Link>
                        </li>
                        {categories.map((category) => (
                            <li key={category}>
                                <Link to={category}>{category}</Link>
                            </li>
                        ))}
                    </FilterOptions>
                </DropPanel>
                <DropPanel>
                    <Span>Sort by</Span>
                    <SortOptions>
                        <li key="recommended">
                            <Link to={pathname}>Recommended</Link>
                        </li>
                        {sort.map((option) => (
                            <li key={option.value}>
                                <Link to={`?sort=${option.value}`}>{option.text}</Link>
                            </li>
                        ))}
                    </SortOptions>
                </DropPanel>
            </FilterBar>
            <ProductWrapper>
                {products?.map((product) => <ProductItem key={product.id} item={product}/>)}
            </ProductWrapper>
        </main>
    )
};

export default Shopping;
