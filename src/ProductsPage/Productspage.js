// import { Link } from 'react-router-dom';
import './productsPage.css'
import SideBar from './SideBar/SideBar'
import Products from './Products';

function ProductsPage() {
    return ( 
        <div className='productsPage'>
            <SideBar />
            <Products />
        </div>
     );
}

export default ProductsPage;