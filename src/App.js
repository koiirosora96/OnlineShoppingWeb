import { 
  BrowserRouter,
  Routes, 
  Route,
} from 'react-router-dom';
import SearchPage from './SearchPage/SearchPage';
import ProductsPage from './ProductsPage/Productspage';
import DetailPage from './DetailPage/DetailPage';
import Home from './Home/Home';
import './db'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}>
          <Route path="/products/detail" element={<DetailPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/" element={<SearchPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// Heroku Deploy https://asdasd123321-fghj.herokuapp.com/