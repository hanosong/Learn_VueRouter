import Home from "../views/home";
import About from "../views/about";
import Login from "../views/Login";
import NotFound from "../views/NotFound";
import Recommend from "../views/HomeComponents/Recommend";
import Ranking from "../views/HomeComponents/Ranking";
import SongMenu from "../views/HomeComponents/SongMenu";
import Category from "../views/Category";
import Order from "../views/Order";
import Detail from "../views/Detail";
import User from "../views/User";
import { Navigate } from "react-router-dom";
const routes = [
  {
    path: "/",
    element: <Navigate to="/home" />,
  },
  {
    path: "/home",
    element: <Home />,
    children: [
      {
        path: "/home",
        element: <Navigate to="/home/recommend" />,
      },
      {
        path: "/home/recommend",
        element: <Recommend />,
      },
      {
        path: "/home/ranking",
        element: <Ranking />,
      },
      {
        path: "/home/songmenu",
        element: <SongMenu />,
      },
    ],
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/category",
    element: <Category />,
  },
  {
    path: "/order",
    element: <Order />,
  },
  {
    path: "/detail/:id",
    element: <Detail />,
  },
  {
    path: "/user",
    element: <User />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;
