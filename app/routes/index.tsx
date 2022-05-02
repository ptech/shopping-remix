import { H1 } from './index.styles';
import {Link} from "@remix-run/react";

export default function Index() {
  return (
    <main>
      <H1>Welcome to Remix</H1>
      <Link to="/shopping">
        Shopping
      </Link>
    </main>
  );
}
