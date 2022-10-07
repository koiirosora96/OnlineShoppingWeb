import { MdOutlineLocalGroceryStore } from "react-icons/md";

export default function AddToCartButton() {
    return (
        <div className="addToCart">
            <button style={{fontSize:"20px", justifyContent:"center"}}>
                Add to cart
                <MdOutlineLocalGroceryStore />
            </button>
        </div>
    )
}