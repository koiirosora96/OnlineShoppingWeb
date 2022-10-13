import { useState, useCallback } from "react";
import NarBarSearch from "./NarBarSearch";
import { MdOutlineLocalGroceryStore } from "react-icons/md";
import { AiOutlineUser } from "react-icons/ai";
import  { BsApple } from "react-icons/bs";
import CartInfo from "../module/CartInfo";
import SignUpForm from "../SignUpView/SignUpForm";
import './NarBar.css'

function NarBar() {
    const [showCart, setShowCart] = useState(false);
    const [showSignUpForm,setShowSignUpForm] = useState(false)
    const [isLogging, setIsLogging] = useState(true)

    const toggleShowSignUpForm = useCallback(
        event => {
            event.preventDefault();
            setShowSignUpForm(!showSignUpForm)
        },
        [showSignUpForm]
    )

    return ( 
        <div className="NarBar-header">
            <NarBarSearch></NarBarSearch>
            <div>
                <BsApple className="NarBar-react-icons-bs"/>
                <div>Online Shopping Web</div>
            </div>
            <div className="NarBar-login">
                { isLogging ? null : <div  onClick={toggleShowSignUpForm}>Sign up /</div>}
                { isLogging ? <AiOutlineUser className="NarBar-userIcon"/> : <div>Login</div>}
                <MdOutlineLocalGroceryStore className="NarBar-LocalGroceryStore" onClick={() => {setShowCart(!showCart)}}/> (5+)
                { showSignUpForm ? <SignUpForm toggleShowSignUpForm={toggleShowSignUpForm}/> : null}
                { showCart ? <CartInfo /> : null}
            </div>

        </div>
     );
}

export default NarBar;