import './color.css'

function Color(props) {
    return ( 
        <div className='color'>
            <div className='color-circle' style={{backgroundColor:`${props.name}`}}></div>
            <div><span>{props.name}</span></div>
        </div>
     );
}

export default Color;