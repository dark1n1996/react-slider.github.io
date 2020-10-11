import React from 'react';
import css from './IcebergTop.module.css';
import Circle from './Cirlce/Circle';

const IcebergTop = (props) => {
    let leafThrough = props.btn[0] ? <div className={css.leaf}></div> : '';
    return (
        <div className={css.iceberg}>
            <Circle top='261px' left='561px' radius='52' />
            <Circle top='428px' left='275px' radius='24' />
            <Circle top='516px' left='820px' radius='18' />
            <Circle top='537px' left='477px' radius='18' />
            {leafThrough}
        </div>
    )
}

export default IcebergTop;