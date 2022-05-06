import React, { Children } from "react";
import { useRoutes } from "react-router-dom";
import Buy from "../../pages/home/Buy";
import Commercial from "../../pages/home/Commercial";
import Homedata from "../../pages/home/Homedata";
import MainHomeData from "../../pages/home/MainHomeData";
import PgCoLiving from "../../pages/home/PgCoLiving";
import Plotes from "../../pages/home/Plotes";
import Rent from "../../pages/home/Rent";
const CustomeRoute = () => {
  let CustomeRoutes = useRoutes([
    {
      path: "/",
      element: <Buy />,
    },
    {
      path: "rent",
      element: <Rent />,
    },
    {
      path: "commercial",
      element: <Commercial />,
    },
    {
      path: "pgcoliving",
      element: <PgCoLiving />,
    },
    {
      path: "plots",
      element: <Plotes />,
    },
  ]);
  return CustomeRoutes;
};

export default CustomeRoute;
