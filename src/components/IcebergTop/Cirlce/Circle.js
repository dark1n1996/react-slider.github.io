import React from 'react';
import css from './Circle.module.css';

const Circle = (props) => {
    let stylesOfRipple = {
        top: `${props.top}`,
        left: `${props.left}`,
        width: `${props.radius}px`,
        height: `${props.radius}px`,
    }
    let stylesOfCircles = {
        width: `${props.radius / 2}px`,
        height: `${props.radius / 2}px`,
        top: `calc(50% - ${props.radius / 4}px)`,
        left: `calc(50% - ${props.radius / 4}px)`,
    }
    return (
        <div className={css.ripple} style={stylesOfRipple}>
            <div className={css.circle} style={stylesOfCircles}></div>
            <div className={css.circle} style={stylesOfCircles}></div>
            <div className={css.circle} style={stylesOfCircles}></div>
        </div>
    );
}

export default Circle;