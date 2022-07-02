import type { AppProps } from "next/app";
import { Provider as UrqlProvider } from "urql";

import "../styles/global.css";
import { client } from "../lib/graphql/client";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UrqlProvider value={client}>
      <Component {...pageProps} />
    </UrqlProvider>
  );
}

export default MyApp;
