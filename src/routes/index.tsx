import React, { createElement, cloneElement } from "react";
import { CustomRouteObject } from "../type/routes/Route.type";
import { createBrowserRouter, RouteObject } from "react-router-dom";
import reactRoute from "./modules";
// import { store } from "@/stores";
// import { pushCashComponent } from "@/stores/History";
// import { random } from "@/utils";

function routerConvert(r: CustomRouteObject): RouteObject {
  return {
    path: r.path,
    id: r.id,
    // index: r.index,
    element: goPages(r),
    loader: r.loader,
    handle: {
      guard: r.guard || false,
      history: r.history || false,
      menuName: r.data,
    },
    children:
      r.children === undefined
        ? undefined
        : r.children.map((c) => routerConvert(c)),
  };
};

function goPages(route: CustomRouteObject): React.ReactNode {
  return route.element;
};

const router = createBrowserRouter(reactRoute.map((r) => routerConvert(r)));

export default router;
