import './App.css'
import ItemListContainer from './components/ItemListContainer';
import NavBarConteiner from './components/NavBarConteiner';
import { BrowserRouter, Routes, Route } from 'react-router'
import CartContainer from './components/CartContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Page404 from './components/Page404';

function App() {
  return (
    <BrowserRouter>
      <NavBarConteiner/>
      <Routes>
        <Route path="/" element={ <ItemListContainer /> } />
        <Route path="/cart" element={ <CartContainer /> } />
        <Route path="/category/:categoryId" element={ <ItemListContainer /> } />
        <Route path="/product/:productId" element={ <ItemDetailContainer /> } />
        {/* RUTA 404 */}
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
