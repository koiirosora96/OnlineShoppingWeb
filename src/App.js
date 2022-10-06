import './App.css';
import { Routes, Route } from 'react-router-dom';
import NarBar from './NarBar/NarBar.js'
import SearchPage from './SearchPage/SearchPage';
import ProductsPage from './ProductsPage/Productspage';
import DetailPage from './DetailPage/DetailPage';
import ContactSession from './ContactSession/ContactSession.js';


function App() {
  return (
          <div className="App">
            <NarBar />
              <Routes>
                <Route path="/products/detail" element={<DetailPage />} />
                <Route path="/products" element={<ProductsPage />} />
                <Route path="/*" element={<SearchPage />} />
              </Routes>
            <ContactSession />
          </div>
  );
}

export default App;
