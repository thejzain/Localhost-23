import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import { SSRProvider } from "@react-aria/ssr";
import Layout from "./layout/layout";

export default function App({ Component, pageProps, session }) {
  return (
    <SessionProvider session={pageProps.session}>
      <SSRProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SSRProvider>
    </SessionProvider>
  );
}
