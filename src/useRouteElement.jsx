import { useRoutes } from "react-router-dom";
import LayoutPage from "./layout/LayoutPage/LayoutPage";
import Home from "./pages/Home/Home";
import ProductInfor from "./pages/productInfor/ProductInfor";

export default function useRouteElements() {
  const routeElement = useRoutes([
    {
      path: "/",
      element: (
        <LayoutPage>
          <Home />
        </LayoutPage>
      ),
    },
    {
      path: "/productInfor",
      element: (
        <LayoutPage>
          <ProductInfor />
        </LayoutPage>
      ),
    },
  ]);
  return routeElement;
}
