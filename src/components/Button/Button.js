import React from 'react';
import css from './Button.module.css';


const Button = (props) => {
    return (
        <button className={css.btn} style={props.style} onClick={props.onClick}></button>
    )
}

export default Button;