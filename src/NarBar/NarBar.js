import { useState } from "react";
import NarBarSearch from "./NarBarSearch";
import { MdOutlineLocalGroceryStore } from "react-icons/md";
import  { BsApple } from "react-icons/bs";
import CartInfo from "../module/CartInfo";
import './NarBar.css'

function NarBar() {
    const [show, setShow] = useState(false);

    return ( 
        <div className="NarBar-header">
            <NarBarSearch></NarBarSearch>
            <div>
                <BsApple className="NarBar-react-icons-bs"/>
                <div>Online Shopping Web</div>
            </div>
            <div className="NarBar-login">
                <div>Login</div>
                <div>/Logout</div>
                <MdOutlineLocalGroceryStore className="NarBar-LocalGroceryStore" onClick={() => {setShow(!show)}}/> (5+)

                { show ? <CartInfo /> : null}
            </div>

        </div>
     );
}

export default NarBar;