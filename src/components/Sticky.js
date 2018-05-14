import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export class Sticky extends Component {
  componentDidMount() {
    if (this.props.stickyDisplay==="true") {
      const sticky = document.getElementsByClassName("sticky-dtp")[0];
      const stickyTop = sticky.offsetTop;
      const stickyOriginalMarginTop = window.getComputedStyle(sticky).marginTop;
      const stickyHeaderHeight= sticky.children[0].offsetHeight;

      document.addEventListener('scroll', () => {
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        
        // if this is a standard sticky
        if (parseInt(stickyOriginalMarginTop) > 0) {
          if (scrollTop > stickyTop) {
            sticky.classList.add('sticky');
            sticky.style.marginTop = 0;
          } else {
            sticky.classList.remove('sticky');
            sticky.style.marginTop = stickyOriginalMarginTop;
          }
        }
        // else this is the special movable margin sticky
        else {
          // if you've scrolled past where the sticky element starts
          if (scrollTop >= stickyTop && scrollTop <= stickyTop + stickyHeaderHeight) {
            sticky.classList.remove('sticky');
            sticky.style.marginTop = (scrollTop - stickyTop - stickyHeaderHeight) + "px";
          } 
          else if (scrollTop > stickyTop + stickyHeaderHeight) {
            sticky.classList.add('sticky');
            sticky.style.marginTop = 0;
          } else {
            sticky.classList.remove('sticky');
            sticky.style.marginTop = stickyOriginalMarginTop;
          }
        }
      });
    }
  }

  render() {
    if (this.props.stickyDisplay==="true") {
      return (<div className={`sticky-dtp ${this.props.className}`} data-sticky>
        {this.props.children}
      </div>);
    }
    else {
      return <div className={this.props.className}>{this.props.children}</div>;
    }
  }
}
