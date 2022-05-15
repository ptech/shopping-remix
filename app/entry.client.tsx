import {RemixBrowser} from "@remix-run/react";
import {hydrate} from "react-dom";
import {CacheProvider} from "@emotion/react";
import {emotionCache} from "~/theme/styles.context";

hydrate(
    <CacheProvider value={emotionCache}>
        <RemixBrowser/>
    </CacheProvider>,
    document
);
