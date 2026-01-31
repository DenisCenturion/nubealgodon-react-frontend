import './App.css'
import ItemListContainer from './components/ItemListContainer';
import NavBarConteiner from './components/NavBarConteiner';
import { BrowserRouter, Routes, Route } from 'react-router'
import ItemDetailContainer from './components/ItemDetailContainer';
import Page404 from './components/Page404';
import SearchPage from './components/SearchPage';
import Footer from './components/Footer';
import HeroBanner from './components/HeroBanner';
import PromoInfo from './components/PromoInfo';
import CartContainer from './components/CartContainer';
import CheckoutContainer from './components/CheckoutContainer';

function App() {
  return (
    <BrowserRouter>

      {/* NAVBAR FIXED */}
      <NavBarConteiner />

      {/* CONTENIDO PRINCIPAL CON ESPACIO PARA EL NAVBAR */}
      <main className="pt-[68px] flex-1">

        <Routes>

          <Route path="/" element={
            <>
              <HeroBanner />
              <PromoInfo />
              <ItemListContainer />
            </>
          }/>
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/product/:productId" element={<ItemDetailContainer />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="*" element={<Page404 />} />
          <Route path="/cart" element={<CartContainer />} />
          <Route path="/checkout" element={<CheckoutContainer />} />

        </Routes>

      </main>

      <Footer />

    </BrowserRouter>
  );
}

export default App;
