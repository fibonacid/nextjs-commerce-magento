import { ReactNode } from "react";
import React from "react";
import {
  CommerceConfig,
  CommerceProvider as CoreCommerceProvider,
  useCommerce as useCoreCommerce,
} from "./commerce";

export type MagentoConfig = Partial<CommerceConfig>;

export const magentoConfig: CommerceConfig = {
  locale: "",
  cartCookie: "",
  async fetcher() {},
};

export type MagentoProps = {
  children?: ReactNode;
  locale: string;
} & MagentoConfig;

export function CommerceProvider({ children, ...config }: MagentoProps) {
  return (
    <CoreCommerceProvider config={{ ...magentoConfig, ...config }}>
      {children}
    </CoreCommerceProvider>
  );
}

export const useCommerce = () => useCoreCommerce();
