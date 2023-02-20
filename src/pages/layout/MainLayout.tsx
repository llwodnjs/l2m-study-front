import { useRef, cloneElement, useEffect, useState } from "react";
import { Header } from "@/components";
import { Outlet } from "react-router-dom";
// import { useStoreSelector } from "@/stores";

import "@/assets/scss/layout/mainLayout.style.scoped.scss";
import ConfirmPwDialog from "@/components/dialog/ConfirmPwDialog";

function MainLayout() {
  const elId = useRef<HTMLDivElement>(null);
  const [isShow, setIsShow] = useState(false);

  return (
    <div className="layout">
      <Header openDialog={() => setIsShow(true)}/>
        <div className="layout__container">
        <div className="layout__container__box__content" ref={elId}>
          <Outlet />
        </div>
        <ConfirmPwDialog isShow={isShow} close={() => setIsShow(false)}/>
      </div>
    </div>
  );
};

export default MainLayout;
