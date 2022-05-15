import type {EntryContext} from "@remix-run/node";
import {RemixServer} from "@remix-run/react";
import {renderToString} from "react-dom/server";
import {CacheProvider} from '@emotion/react'
import {emotionCache} from "~/theme/styles.context";

export default async function handleRequest(
    request: Request,
    responseStatusCode: number,
    responseHeaders: Headers,
    remixContext: EntryContext
) {
    let markup = renderToString(
        <CacheProvider value={emotionCache}>
            <RemixServer context={remixContext} url={request.url}/>
        </CacheProvider>
    );

    responseHeaders.set("Content-Type", "text/html");

    return new Response("<!DOCTYPE html>" + markup, {
        status: responseStatusCode,
        headers: responseHeaders,
    });
}
