import './SideBar.css'

function SideBar() {
    return ( 
        <div className="SideBar">
            <h3>Filter by</h3>
            <form className="SideBar--form">
                <input type="checkbox" id="checkbox1"></input>
                <label>PC</label><br></br>
                <input type="checkbox" id="checkbox2"></input>
                <label>Laptop</label><br></br>
                <input type="checkbox" id="checkbox3"></input>
                <label>Headphone</label><br></br>
                <input type="checkbox" id="checkbox4"></input>
                <label>Mouse</label><br></br>
                <input type="checkbox" id="checkbox5"></input>
                <label>Price</label><br></br>
                <input type="checkbox" id="checkbox6"></input>
                <label>Stars</label><br></br>
                <input type="checkbox" id="checkbox7"></input>
                <label>Brand</label><br></br>
            </form>
        </div>
     );
}

export default SideBar;