import NarBarSearch from "./NarBarSearch";
import { MdOutlineLocalGroceryStore } from "react-icons/md";
import  { BsApple } from "react-icons/bs";
import './NarBar.css'

function NarBar() {
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
                <MdOutlineLocalGroceryStore className="NarBar-LocalGroceryStore"/> (5+)
            </div>
        </div>
     );
}

export default NarBar;