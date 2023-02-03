import {CustomRouteObject} from "../Route.type";
import Login from "@/pages/login/Login";
import MainLayout from "@/pages/layout/MainLayout";
import Main from "@/pages/main/Main";
import Join from "@/pages/join/Join";
import FindPw from "@/pages/findpw/FindPw";
import ChangePwDialog from "@/components/dialog/ChangePwDialog";
import ItemSearch from "@/pages/search/ItemSearch";
// import PopupLayout from "@/pages/layouts/PopupLayout";
// import {GlobalError} from "@/pages/global";

const router: CustomRouteObject[] = [
  {
    id: "root",
    path: "/",
    element: <MainLayout />,
    children: [
      {
        id: "main",
        data: "Main",
        path: "/",
        element: <Main />,
      },
      {
        id: "login",
        path: "login",
        element: <Login />,
      },
      {
        id: "join",
        path: "join",
        element: <Join />,
      },
      {
        id: "findPw",
        path: "findPw",
        element: <FindPw />,
      },
      {
        id: "itemSearch",
        path: "itemSearch",
        element: <ItemSearch />,
      },
    ],
  },
  // {
  //   id: "login",
  //   path: "/login",
  //   element: <MainLayout />,
  //   children: [
  //     {
  //       id: "login1",
  //       data: "로그인",
  //       // path: "main",
  //       element: <Login />,
  //     },
  //     // {
  //     //   id: "login",
  //     //   path: "login",
  //     //   element: <Login />,
  //     // },
  //   ],
  // },
];

export default router;
