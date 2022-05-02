import type { LoaderFunction } from "@remix-run/node";
import { Link, useLoaderData, useLocation, useParams } from "@remix-run/react";
import { json, Response } from "@remix-run/node";

import type { Product } from "~/models/products";
import { getCategories, getProducts, getProductsByCategory } from "~/models/products";

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

type Option = {
    value: string;
    text: string;
};

type LoaderData = {
    products: Product[];
    categories: string[];
    sort: Option[];
};

export const loader: LoaderFunction = async ({ params, request }) => {

    const url = new URL(request.url);
    const sort: string | null = url.searchParams.get('sort');

    const products = !params['*']
        ? await getProducts(sort)
        : await getProductsByCategory(params['*'], sort);

    if (!products || !products.length) {
        throw new Response("Not Found", { status: 404 });
    }

    return json<LoaderData>({
        products,
        categories: await getCategories(),
        sort: [{
            value: 'asc',
            text: 'Price (Low to High)'
        }, {
            value: 'desc',
            text: 'Price (High to Low)'
        }]
    });
}

const Shopping = () => {
    const params = useParams();
    const { pathname } = useLocation();
    const { products = [], categories = [], sort } = useLoaderData<LoaderData>();
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
                {products?.map((product) => <ProductItem key={product.id} item={product} />)}
            </ProductWrapper>
        </main>
    )
};

export default Shopping;
