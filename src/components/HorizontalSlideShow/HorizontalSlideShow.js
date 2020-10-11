import React, { Component } from 'react';
import css from './HorizontalSlideShow.module.css';

class HorizontalSlideShow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            valueOfRange: 50,
            currentValue: 50,
            change: false,
        }
    }
    onChange(event) {
        this.setState({currentValue: event.target.value, change: true});
        let value;
        if(event.target.value < 25) value = 0;
        if(event.target.value >= 25 && event.target.value < 75) value = 50;
        if(event.target.value >= 25 && event.target.value >= 75) value = 100;
        this.setState({valueOfRange: value})
    }
    offTouch() {
        this.setState({ change: false});
    }
    render() {
        return (
            <div className={css.slider}>
                <input className={css.input} type='range' min='0' max='100' step='1' 
                value={this.state.change ? this.state.currentValue : this.state.valueOfRange} 
                onTouchEnd={() => this.offTouch()} onChange={(event) => this.onChange(event)}
                style={{backgroundImage:`-webkit-linear-gradient(left, rgb(209, 234, 255) 0%, rgb(209, 234, 255) ${this.state.change ? this.state.currentValue : this.state.valueOfRange}%, #435063 0%, #435063 100%)`}}>
                </input>
                <div className={css.wrapper} style={{transform: `translateX(${ -2*this.state.valueOfRange}vw)`}}>
                    <div className={css.item} ></div>
                    <div className={css.item} ></div>
                    <div className={css.item} ></div>
                </div>
            </div>
        )
    }
}

export default HorizontalSlideShow;