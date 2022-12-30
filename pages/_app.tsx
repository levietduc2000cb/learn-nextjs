import { CacheProvider } from "@emotion/react";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { SWRConfig } from "swr";
import createEmotionCache from "../utils/createEmotionCache";
import theme from "../utils/theme";

import EmptyLayout from "../components/emtyLayout";
import { AppPropsWithLayout } from "../models/common";
import "../styles/globals.css";
import axiosHttp from "../utils/axiosHttp";

const clientSideEmotionCache = createEmotionCache();

export default function App({
  Component,
  pageProps,
  emotionCache = clientSideEmotionCache,
}: AppPropsWithLayout) {
  const Layout = Component.Layout ?? EmptyLayout;

  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        {/* CssBaseline style giữa các trình duyệt đồng nhất với nhau */}
        <CssBaseline />
        <SWRConfig
          value={{
            fetcher: url => axiosHttp.get(url),
            shouldRetryOnError: false,
          }}
        >
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </SWRConfig>
      </ThemeProvider>
    </CacheProvider>
  );
}
