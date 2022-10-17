import { useState, useCallback } from "react";
import NarBarSearch from "./NarBarSearch";
import { MdOutlineLocalGroceryStore } from "react-icons/md";
import { AiOutlineUser } from "react-icons/ai";
import  { BsApple } from "react-icons/bs";
import CartInfo from "../module/CartInfo";
import SignUpForm from "../SignUpView/SignUpForm";
import UserInfo from "./UserInfo";
import './NarBar.css'

function NarBar() {
    const [showCart, setShowCart] = useState(false);
    const [showSignUpForm,setShowSignUpForm] = useState(false)
    const [showUserInfo,setShowUserInfo] = useState(false)
    const [isLogging, setIsLogging] = useState(true)

    const toggleShowSignUpForm = useCallback(
        event => {
            event.preventDefault();
            setShowSignUpForm(!showSignUpForm)
        },
        [showSignUpForm]
    )

    var newStudent = [{
        "name":        "John",
        "age":         21,
        "nationality": "Spanish",
        "email": "chevanthao96@gmail.com"
    }];

    localStorage.setItem("students", JSON.stringify(newStudent));
    var retrievedObject = localStorage.getItem("students");
    var stored          = JSON.parse(retrievedObject);

    const email = stored[0].email

    return ( 
        <div className="NarBar-header">
            <NarBarSearch></NarBarSearch>
            <div>
                <BsApple className="NarBar-react-icons-bs"/>
                <div>Online Shopping Web</div>
            </div>
            <div className="NarBar-login">
                { isLogging ? null : <div  onClick={toggleShowSignUpForm}>Sign up /</div>}
                <div className="user-info">
                { isLogging ? <AiOutlineUser className="NarBar-userIcon" onClick={() => setShowUserInfo(!showUserInfo)}/> : <div>Login</div>}
                { showUserInfo ? <UserInfo email={email}/> : null }
                </div>
                <MdOutlineLocalGroceryStore className="NarBar-LocalGroceryStore" onClick={() => {setShowCart(!showCart)}}/> (5+)
                { showSignUpForm ? <SignUpForm toggleShowSignUpForm={toggleShowSignUpForm}/> : null}
                { showCart ? <CartInfo /> : null}
            </div>

        </div>
     );
}

export default NarBar;