import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductDetail from "./productDetail";
import Products from "./products";

function Routers() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/productDetail/:id" element={<ProductDetail />} />
        </Routes>
      </Router>
    </div>
  );
}
export default Routers;
