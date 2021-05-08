import React from 'react'
import './style.css'


function Button(props) {
    console.log(props)
    return (
        <button className={props.size === 'bigger'? 'button-bigger button' : 'button' } onClick={props.onClick}>
            <img src={props.srcIcon} alt=""/>
            
            
        </button>
    )
}

export default Button
