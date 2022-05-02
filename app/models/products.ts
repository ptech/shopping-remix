const baseUrl = 'https://fakestoreapi.com/products';

export type Params = {
    limit?: number;
    sort?: string;
}

export type Product = {
    id: number;
    title: string;
    price: number;
    category: string;
    description: string;
    image: string;
    rating: {
        rate: number;
        count: number;
    }
}

const orderedProducts = (products: Product[] = [], sort?: string | null) => {
    if (sort === 'asc') {
        products.sort((a, b) => a.price - b.price);
    } else if (sort === 'desc') {
        products.sort((a, b) => b.price - a.price);
    }

    return products;
}

export const getProducts = async (sort?: string | null): Promise<Product[]> => {
    try {
        const result = await fetch(baseUrl);
        const products: Product[] = await result.json();

        return orderedProducts(products, sort);
    } catch (error) {
        throw error;
    }
}

export const getProduct = async (id: number): Promise<Product> => {
    try {
        const result = await fetch(`${baseUrl}/${id}`);

        return result.json();
    } catch (error) {
        throw error;
    }
}

export const getCategories = async (): Promise<string[]> => {
    try {
        const result = await fetch(`${baseUrl}/categories`);

        return result.json();
    } catch (error) {
        throw error;
    }
}

export const getProductsByCategory = async (category: string, sort?: string | null): Promise<Product[]> => {
    try {
        const result = await fetch(`${baseUrl}/category/${category}`);
        const products: Product[] = await result.json();

        return orderedProducts(products, sort);
    } catch (error) {
        throw error;
    }
}
