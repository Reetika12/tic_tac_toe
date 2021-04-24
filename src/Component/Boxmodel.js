import React from 'react'

 const Boxmodel = (props) =>{
    return (
        <button onClick={props.onClick}>
            {props.children}
        </button>
    )
}
export default Boxmodel