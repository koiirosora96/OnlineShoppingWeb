import "./category.css"
import { Link } from 'react-router-dom'

function Category(props) {
    console.log(props.image)
    return ( 
        <div className="category">
            <Link to="/products" >
                <img 
                    src={`SearchPagePics/${props.image}`}
                    alt=""
                >
                </img>
            </Link>
            <h2>{props.name}</h2>
        </div>
     );
}

export default Category;