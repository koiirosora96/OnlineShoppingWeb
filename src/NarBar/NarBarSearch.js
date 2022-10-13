import './NarBarSearch.css'
import { Link } from 'react-router-dom'

function NarBarSearch() {
    return ( 
        <div className="NarBarSearch">
            <Link to="/" style={{textDecoration:"none", color:"white"}}><span><h2>Search</h2></span></Link>
            <div className='NarBarSearch-input'>
                <input type="text" placeholder='Search here'></input>
            </div>
        </div>
     );
}

export default NarBarSearch;