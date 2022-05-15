import type {LoaderFunction, MetaFunction} from "@remix-run/node";
import {
    Links,
    LiveReload,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration, useLoaderData,
} from "@remix-run/react";
import {Global} from "@emotion/react";
import globalStyles from "~/theme/global.styles";

// Components
import Header from "~/components/header/Header";
import Footer from "~/components/footer/Footer";
import {getBagCount} from "~/model/bag";
import {json} from "@remix-run/node";

type LoaderData = {
    bagCounter: number;
};

export const loader: LoaderFunction = async () => {
    const bagCounter = await getBagCount();

    return json<LoaderData>({ bagCounter });
};

export const meta: MetaFunction = () => ({
    charset: "utf-8",
    title: "New Remix App",
    viewport: "width=device-width,initial-scale=1",
});

export default function App() {
    const { bagCounter } = useLoaderData<LoaderData>();

    return (
        <html lang="en">
        <head>
            <Meta/>
            <Links/>
        </head>
        <body>
        <Global styles={globalStyles}/>
        <Header bagCounter={bagCounter}/>
        <Outlet/>
        <Footer/>
        <ScrollRestoration/>
        <Scripts/>
        <LiveReload/>
        </body>
        </html>
    );
}
