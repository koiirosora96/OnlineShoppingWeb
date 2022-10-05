import "./category.css"
import { Link } from 'react-router-dom'

function Category() {
    return ( 
        <div className="category">
            <Link to="/products" ><img src=""></img></Link>
            <h2>Laptop</h2>
        </div>
     );
}

export default Category;