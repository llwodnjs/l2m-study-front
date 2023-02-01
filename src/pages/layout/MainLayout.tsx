import { useRef, cloneElement, useEffect } from "react";
import { Header } from "@/components";
import { Outlet } from "react-router-dom";
// import { useStoreSelector } from "@/stores";

import "@/assets/scss/layout/mainLayout.style.scoped.scss";

function MainLayout() {
  const elId = useRef<HTMLDivElement>(null);

  return (
    <div className="layout">
      <Header />
      <div className="layout__container">
        <div className="layout__container__box__content" ref={elId}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
