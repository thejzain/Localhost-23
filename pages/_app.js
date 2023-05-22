import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import Layout from "./layout/layout";
import { createTheme, NextUIProvider, Text } from "@nextui-org/react";

export default function App({ Component, pageProps, session }) {
  const theme = createTheme({
    type: "dark",
    theme: {
      fonts: {
        mono: "VT323",
      },
    },
  });
  return (
    <SessionProvider session={session}>
      <NextUIProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </NextUIProvider>
    </SessionProvider>
  );
}
