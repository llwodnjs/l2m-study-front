import {CustomRouteObject} from "../../type/routes/Route.type";
import Login from "@/pages/login/Login";
import MainLayout from "@/pages/layout/MainLayout";
import Main from "@/pages/main/Main";
import Join from "@/pages/join/Join";
import FindPw from "@/pages/findpw/FindPw";
import ChangePwDialog from "@/components/dialog/ChangePwDialog";
import ItemSearch from "@/pages/search/ItemSearch";
import LowPriceSearch from "@/pages/search/LowPriceSearch";
import MySetting from "@/pages/mysetting/MySetting";
import ItemInfoDialog from "@/components/dialog/ItemInfoDialog";
import CompareDialog from "@/components/dialog/CompareDialog";
import Favorites from "@/pages/favorites/Favorites";
import ItemChangeDialog from "@/components/dialog/ItemChangeDialog";
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
        id: "myInfo",
        path: "myInfo",
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
      {
        id: "lowPrice",
        path: "lowPriceSearch",
        element: <LowPriceSearch />,
      },
      {
        id: "mySetting",
        path: "mySetting",
        element: <MySetting />,
      },
      {
        id: "compare",
        path: "compare",
        element: <CompareDialog />,
      },
      {
        id: "changePw",
        path: "changePw",
        element: <ChangePwDialog />,
      },
      {
        id: "favorites",
        path: "favorites",
        element: <Favorites />,
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
