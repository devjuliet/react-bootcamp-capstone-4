import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import ProductDetail from './pages/ProductDetail';
import Results from './pages/Results';
import ShoppingCart from './pages/ShoppingCart';
import Checkout from './pages/Checkout';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="product-list" element={<ProductList />} />
    </Routes>
  );
};

export default AppRouter;