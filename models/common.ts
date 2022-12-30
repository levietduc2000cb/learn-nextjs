import { ReactNode } from "react";
import type { ReactElement } from "react";
import { NextPage } from "next";
import { AppProps } from "next/app";
import { EmotionCache } from '@emotion/react';

export interface LayoutProps {
  children: ReactNode;
}

export type NextPageWithLayout = NextPage & {
  Layout?: (page: LayoutProps) => ReactElement;
};

export type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
  emotionCache?: EmotionCache
};
