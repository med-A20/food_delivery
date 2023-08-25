import "../styles/globals.css";
import Layout from "../components/Layout";
import { MantineProvider } from "@mantine/core";
function MyApp({ Component, pageProps }) {
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{ colorScheme: "light" }}
    >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </MantineProvider>
  );
}

export default MyApp;
