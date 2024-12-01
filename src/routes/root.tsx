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
import { FavoritesPage } from "../pages/Favorites/Favorites";
import { Especialespage } from "../pages/especiales/Especiales";
import { AboutUsPage } from "../pages/AboutUs/AboutUs";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Homepages />
    ),
  },
  {
    path: "/about-us",
    element: <AboutUsPage />,
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
    path: "ESPECIALES",
    element: <Especialespage/>,
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
    path: "favorites",
    element: <FavoritesPage />
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