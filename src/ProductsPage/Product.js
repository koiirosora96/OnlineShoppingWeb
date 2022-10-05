import './product.css'
import { Link } from 'react-router-dom'

export default function Product() {
    return ( 
        <div className="product">
            <div className='product--img'>
                <img src=""></img>
            </div>
            <div className='product--content'>
                <Link to="/products/detail"><h2>Title</h2></Link>
                <p>Discription : Msi power full ,be brought to bed, bed and board, bed and breakfast, bed of roses, bed and breakfast, bed of roses</p>
                <div className='product--stars'>
                    <p>⭐️⭐️⭐️⭐️⭐️</p>
                    <p>4.9</p>
                </div>
                <div className='product--price'>
                    <span>2,999円</span>
                </div>
                <div>delivery on March</div>
                <div><span>New</span></div>
            </div>
        </div>
     );
}
