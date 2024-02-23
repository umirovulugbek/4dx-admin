import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Product from "../pages/Product";
import Goals from "../pages/Goals";
import MyTask from "../pages/MyTask";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/product" element={<Product />} />
      <Route path="/goals" element={<Goals />} />
      <Route path="/my-tasks" element={<MyTask />} />
    </Routes>
  );
};

export default Routers;
