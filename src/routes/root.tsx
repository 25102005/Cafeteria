import {
  createBrowserRouter,
  Navigate,
} from "react-router-dom";
import { BebidasPage  } from "../pages/bebidas/Bebidas";
import { Desayunospage } from "../pages/desayunos/Desayunos";
import { Homepages } from "../pages/homepages/Homepages";
import { ProductPage } from "../pages/product/Product";
import { Postrespage } from "../pages/postres/Postres";
import { Checkout } from "../pages/checkout/checkout";
import { ShoppingCartPage } from "../pages/shoppingCart/ShoppingCart";

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
    path: "BEBIDAS",
    element: <BebidasPage/>,
  },
  {
    path: "POSTRES",
    element: <Postrespage/>,
  },
  {
    path: "product/:productId",
    element: <ProductPage/>
  },
  {
    path: "shopping-cart",
    element: <ShoppingCartPage />
  },
  {
    path: "checkout",
    element: <Checkout />
  },
  {
    path: "*",
    element: (<Navigate to="/" replace={true} />)
  },
]);

export { router }