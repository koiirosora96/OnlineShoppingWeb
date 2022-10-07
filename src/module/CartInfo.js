import { MdOutlineLocalGroceryStore } from "react-icons/md";
import CheckOutButton from "./CheckOutButton";

export default function CartInfo() {
 return (
    <div className="cardInfo">
        <div>
            <MdOutlineLocalGroceryStore /> 10
            <ul>
                <li>1</li>
                <li>1</li>
                <li>1</li>
                <li>1</li>
            </ul>
            <div>Total : 99,999円</div>
            <CheckOutButton />
        </div>
    </div>
 )
}