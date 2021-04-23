import React from 'react'

export const Boxmodel = (props) =>{
    return (
        <button onClick={props.onClick}>
            {props.children}
        </button>
    )
}