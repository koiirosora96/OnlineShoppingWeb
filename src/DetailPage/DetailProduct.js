import './detailProduct.css'
import Colors from './Colors';
import AddToCartButton from '../module/AddToCartButton';
import Product from '../ProductsPage/Product';

function DetailProduct() {
    return ( 
        <div className='detailProduct'>
            <div className='detailProduct--top'>
                <div className='detailProduct--img'>
                    <img src=""></img>
                </div>
                <div className='detailProduct--content'>
                    <span><h2>Title</h2></span>
                    <p>Discription : Msi power full ,be brought to bed, bed and board, bed and breakfast, bed of roses, bed and breakfast, bed of roses</p>
                    <div className='detailProduct--stars'>
                        <p>⭐️⭐️⭐️⭐️⭐️</p>
                        <p>4.9</p>
                    </div>
                    <div className='detailProduct--price'>
                        <span>2,999円</span>
                    </div>
                    <div>delivery on March</div>
                    <div><span>New</span></div>
                    <Colors />
                </div>
            </div>

            <div className='detailProduct--list'>
                {/* mapping list */}
                <ul>
                    <li>Cats and humans have been associated for nearly 10000 years.</li>
                    <li>Cats can be lethal hunters and very sneaky, when they walk their back paws step almost exactly in the same place as the front paws did beforehand, this keeps noise to a minimum and limits visible tracks.</li>
                    <li>Cats also have excellent hearing and a powerful sense of smell.</li>
                    <li>On average cats live for around 12 to 15 years.</li>
                </ul>
            </div>

            <AddToCartButton />

            <div className='detailProduct--comp'>
                <h2>comperation</h2>
                <div className='detailProduct--comp__product'>
                    <Product />
                    <Product />
                </div>
            </div>
        </div>
     );
}

export default DetailProduct;