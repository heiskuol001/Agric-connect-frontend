import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import HomeLayout from "./layouts/HomeLayout";
import Blog from './pages/Blog'
import Login from '../src/pages/Login'
import FarmerLayout from "./layouts/FarmerLayout";
import Farmer from "./pages/Farmer";
import ProductPage from "./pages/farmerPages/ProductPage";
import OrderPage from "./pages/farmerPages/OrderPage";
import MessagePage from "./pages/farmerPages/MessagePage";
import MarketPlaceLayout from "./layouts/MarketPlaceLayout";
import MarketPlace from "./pages/marketplacePages/MarketPlace";

const App = () => {
  return (
    <Routes>
      <Route element={<HomeLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
      </Route>
      <Route path="/login" element={<Login />} />
      
      <Route element={<FarmerLayout />}>
        <Route path="/farmer/dashboard" element={<Farmer />} />
        <Route path="/farmer/products" element={<ProductPage />} />
        <Route path="/farmer/orders" element={<OrderPage />} />
        <Route path="/farmer/messages" element={<MessagePage />} />
      </Route>

      <Route element={<MarketPlaceLayout />}>
        <Route path='/marketplace' element={<MarketPlace />} />
      </Route>
    </Routes>
  );
};

export default App;