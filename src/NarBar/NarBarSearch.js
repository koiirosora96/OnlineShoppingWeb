import './NarBarSearch.css'

function NarBarSearch() {
    return ( 
        <div className="NarBarSearch">
            <h2>Search</h2>
            <div className='NarBarSearch-input'>
                <input type="text" placeholder='Search here'></input>
                <p>icon</p>
            </div>
        </div>
     );
}

export default NarBarSearch;