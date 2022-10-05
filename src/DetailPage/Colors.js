import Color from './Color'

function Colors() {
    return ( 
        <div style={{textAlign:"center"}}>
            <h2>Colors</h2>
            <div style={{display:'flex', justifyContent:"center"}}>
                <Color name="white" />
                <Color name="black" />
                <Color name="Red" />
            </div>
        </div>
     );
}

export default Colors;