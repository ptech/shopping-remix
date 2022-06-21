import React from 'react';
import {
    Links,
    LiveReload,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration, useCatch, useLoaderData,
} from "@remix-run/react";
import {json} from "@remix-run/node";

import {Global} from "@emotion/react";
import globalStyles from "~/theme/global.styles";

// Components
import Header from "~/components/header/Header";
import Footer from "~/components/footer/Footer";
import {getBagCount} from "~/model/bag";

import type {ErrorBoundaryComponent, LoaderFunction, MetaFunction} from "@remix-run/node";
import type {CatchBoundaryComponent} from "@remix-run/react/routeModules";

type LoaderData = {
    bagCounter: number;
};

interface DocumentProps {
    children: React.ReactNode;
    title?: string;
}

export const loader: LoaderFunction = async () => {
    const bagCounter = await getBagCount();

    return json<LoaderData>({ bagCounter });
};

export const meta: MetaFunction = () => ({
    charset: "utf-8",
    title: "Switch Store",
    viewport: "width=device-width,initial-scale=1",
});

const Document: React.FC<DocumentProps> = ({ children, title }) => (
    <html lang="en">
    <head>
        {title ? <title>{title}</title> : undefined}
        {/* All meta exports on all routes will go here */}
        <Meta/>
        {/* All link exports on all routes will go here */}
        <Links/>
    </head>
    <body>
    {/* Global emotion styles */}
    <Global styles={globalStyles}/>

    {children}

    {/* Manages scroll position for client-side transitions */}
    {/* If you use a nonce-based content security policy for scripts,
    you must provide the `nonce` prop. Otherwise, omit the nonce prop as shown here. */}
    <ScrollRestoration/>

    {/* Script tags go here */}
    {/* If you use a nonce-based content security policy for scripts, you must provide the `nonce` prop.
    Otherwise, omit the nonce prop as shown here. */}
    <Scripts/>

    {/* Sets up automatic reload when you change code */}
    {/* and only does anything during development */}
    {/* If you use a nonce-based content security policy for scripts,
    you must provide the `nonce` prop. Otherwise, omit the nonce prop as shown here. */}
    <LiveReload/>
    </body>
    </html>
);

export default function App() {
    const { bagCounter } = useLoaderData<LoaderData>();

    return (
        <Document>
            <Header bagCounter={bagCounter}/>
            {/* Child routes go here */}
            <Outlet/>
            <Footer/>
        </Document>
    );
}

export const CatchBoundary: CatchBoundaryComponent = () => {
    const caught = useCatch();

    return (
        <Document title="Oops!">
            <main style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {caught.status === 404 && (
                    <img
                        style={{ maxHeight: '100vh', width: 'auto' }}
                        src="https://cdn.dribbble.com/users/1175431/screenshots/6188233/media/ad42057889c385dd8f84b8330f69269b.gif" />
                )}
                {caught.status !== 404 && <h1>Oops! Something went wrong!</h1>}
            </main>
        </Document>
    );
}

export const ErrorBoundary: ErrorBoundaryComponent = ({ error }) => {
    return (
        <Document title="Oops!">
            <main>
                <h1>Oops! Something went wrong!</h1>
                <pre>{error.stack}</pre>
            </main>
        </Document>
    );
}
