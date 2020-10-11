import React from 'react';
import css from './IcebergBottom.module.css';

const IcebergBottom = (props) => {
    let offset;
    if(props.btn[0]) offset = '-75';
    if(props.btn[1]) offset = '0';
    if(props.btn[2]) offset = '75';
    let styles = {
        transform: `translateY(${offset}px)`,
    }
    return (
        <div className={css.iceberg} >
            <div className={css.ice} style={styles}/>
            <div className={css.ice} style={styles}/>
            <div className={css.ice} style={styles}/>
            <div className={css.ice} style={styles}/>
        </div>
    )
}

export default IcebergBottom;