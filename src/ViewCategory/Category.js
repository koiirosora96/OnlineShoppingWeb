import "./category.css"
import { Link } from 'react-router-dom'

function Category(props) {
    console.log(props)
    return ( 
        <div className="category">
            <Link to="/products" ><img style={{
                backgroundImage: `url(${props.image})`
                }}></img>
            </Link>
            <h2>{props.name}</h2>
        </div>
     );
}

export default Category;