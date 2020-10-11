import React, { Component } from 'react';
import css from './App.module.css';
import Button from './Button/Button';
import HorizontalSlideShow from './HorizontalSlideShow/HorizontalSlideShow';
import IcebergTop from './IcebergTop/IcebergTop';
import IcebergBottom from './IcebergBottom/IcebergBottom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numberOfSlide: 0,
      btn: [true, false, false],
      firstTouchPoint: null,
    }
  }
  onTouch(event) {
    event.stopPropagation();
    this.setState({ firstTouchPoint: event.changedTouches[0].pageY });
  }
  offTouch(event) {
    event.stopPropagation();
    const btn = this.state.btn;
    const def = this.state.firstTouchPoint - event.changedTouches[0].pageY;
    if (this.state.numberOfSlide <= 0 && this.state.numberOfSlide > -2) {
      if (def > 40) {
        btn.unshift(false);
        this.setState({ numberOfSlide: this.state.numberOfSlide - 1, btn: btn });
      }
    }
    if (this.state.numberOfSlide >= -2 && this.state.numberOfSlide < 0) {
      if (def < -40) {
        btn.shift();
        this.setState({ numberOfSlide: this.state.numberOfSlide + 1, btn: btn });
      }
    }
  }

  render() {
    return (
      <div className={css.slidshow}>
        <Button style={{ top: '47.5%', right: '2%', backgroundColor: `${this.state.btn[0] ? '#f78b1f' : 'white'}` }}
          onClick={() => this.setState({ numberOfSlide: 0, btn: [true, false, false] })} />
        <Button style={{ top: '50%', right: '2%', backgroundColor: `${this.state.btn[1] ? '#f78b1f' : 'white'}` }}
          onClick={() => this.setState({ numberOfSlide: -1, btn: [false, true, false] })} />
        <Button style={{ top: '52.5%', right: '2%', backgroundColor: `${this.state.btn[2] ? '#f78b1f' : 'white'}` }}
          onClick={() => this.setState({ numberOfSlide: -2, btn: [false, false, true] })} />
        <div className={css.wrapper} style={{ transform: `translateY(${100 * this.state.numberOfSlide}vh)` }}
          onTouchStart={(event) => this.onTouch(event)} onTouchEnd={(event) => this.offTouch(event)}>
          <IcebergTop btn={this.state.btn}/>
          <IcebergBottom btn={this.state.btn}/>
          <HorizontalSlideShow />
        </div>
      </div>
    )
  }
}

export default App;
