import React from "react";
import { CommerceProvider } from "../src";

export function App({ children, locale = "en-us" }) {
  return <CommerceProvider locale={locale}>{children}</CommerceProvider>;
}
