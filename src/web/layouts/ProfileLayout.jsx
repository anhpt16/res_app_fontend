import React from "react";

import { Header } from "../../shared/layouts";
import { Navigation } from "./Navigation";

export const ProfileLayout = ({children}) => {
  return (
    <>
      <Header />
      <div className="flex flex-row bg-slate-100">
        <Navigation />
        <main className="flex-1 h-[calc(100vh-112px)] overflow-y-auto bg-transparent">{children}</main>
      </div>
    </>
  )
}
