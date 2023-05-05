import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import Layout from "./layout/layout";

export default function App({ Component, pageProps, session }) {
  return (
    <SessionProvider session={session}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  );
}
