import {
  createBrowserRouter,
  Navigate,
} from "react-router-dom";
import { Desayunospage } from "../pages/desayunos/Desayunos";
import { Homepages } from "../pages/homepages/Homepages";
import { ProductPage } from "../pages/product/Product";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Homepages />
    ),
  },
  {
    path: "DESAYUNOS",
    element: <Desayunospage/>,
  },
  {
    path: "COMIDAS",
    element: <div>BUENOS</div>,
  },
  {
    path: "POSTRES",
    element: <div>DELICIOSOS</div>,
  },
  {
    path: "product/:productId",
    element: <ProductPage/>
  },
  {
    path: "*",
    element: (<Navigate to="/" replace={true} />)
  },
]);

export { router }