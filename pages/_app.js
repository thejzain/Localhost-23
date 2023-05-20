import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import { SSRProvider } from "@react-aria/ssr";
import Layout from "./layout/layout";
import { NextUIProvider } from "@nextui-org/react";

export default function App({ Component, pageProps, session }) {
  return (
    <SessionProvider session={pageProps.session}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  );
}
