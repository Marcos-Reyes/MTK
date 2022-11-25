import { BrowserRouter, Route, Routes } from "react-router-dom";
import DetailProduct from "../pages/DetailProduct";
import Home from "../pages/Home";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categoria/:categoryId" element={<Home />} />
        <Route path="/detalle/:productId" element={<DetailProduct />} />
        <Route path="*" element={<h1>Error 404: Esta página no existe</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router
