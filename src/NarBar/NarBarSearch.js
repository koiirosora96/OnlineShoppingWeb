import './NarBarSearch.css'
import { Link } from 'react-router-dom'

function NarBarSearch() {
    return ( 
        <div className="NarBarSearch">
            <Link to="/"><h2>Search</h2></Link>
            <div className='NarBarSearch-input'>
                <input type="text" placeholder='Search here'></input>
                <p>icon</p>
            </div>
        </div>
     );
}

export default NarBarSearch;