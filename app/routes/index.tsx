import {Link} from "@remix-run/react";

export default function Index() {
    return (
        <main>
            <Link to="/shopping">
                <img src="https://www.citrusplaza.com/wp-content/uploads/2016/05/main-banner-shopping.png" alt="shopping" />
            </Link>
        </main>
    );
}
