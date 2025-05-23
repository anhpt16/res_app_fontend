import React from 'react';

import { Header } from "./Header";
import { Footer } from "./Footer";

export const WebLayout = ({children}) => {
  return (
    <>
        <Header />
        <main>{children}</main>
        <Footer />
    </>
  )
}
