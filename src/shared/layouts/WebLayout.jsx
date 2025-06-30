import React from 'react';

import { Header } from "./Header";
import { Footer } from "./Footer";

export const WebLayout = ({children}) => {
  return (
    <>
        <Header />
        <main className="min-h-screen flex flex-col">
          <div className="flex-1">
            {children}
          </div>
        </main>
        <Footer />
    </>
  )
}
