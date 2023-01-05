import { ReactNode } from "react";
import type { ReactElement } from "react";
import { NextPage } from "next";
import { AppProps } from "next/app";
import { EmotionCache } from "@emotion/react";

export interface LayoutProps {
  children: ReactNode;
}

export type NextPageWithLayout<P = {}> = NextPage<P> & {
  Layout?: (page: LayoutProps) => ReactElement;
};

export type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
  emotionCache?: EmotionCache;
};
