import React from 'react';
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import reportWebVitals from "@/reportWebVitals";
import router from "@/routes";
// import { store } from "@/stores";

/**
 * React 에서 *, :root 등의 전역 css는 메인 최상단에 선언하여 전역으로 설정한다.
 */
import "@/assets/scss/common.scss";

// document.getElementById("root")?.setAttribute("theme", "Dark");

const root = ReactDOM.createRoot(document.getElementById(
  "root"
) as HTMLElement);

root.render(
    <RouterProvider router={router} />
  // <ReduxProvider store={store}>
  // </ReduxProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
