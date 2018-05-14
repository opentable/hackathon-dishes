import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export class StickyNav extends Component {
  componentDidMount() {
    const sticky = ReactDOM.findDOMNode(this.refs.stickyNav);
    const stickyHeight = sticky.offsetHeight;
    let stickyTop = sticky.offsetTop;
    const nav = sticky.children[0];
    const mainContainer = document.getElementsByClassName("MainContainer")[0];
    const mainContent = document.getElementById("MainContainer__content");

    document.addEventListener('scroll', () => {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

      // if you've scrolled past where the sticky element starts
      if (scrollTop > stickyTop) {
        sticky.classList.add('sticky');
        nav.style.marginTop = 0;
      } else {
        nav.style.marginTop = -stickyHeight + "px";
        sticky.classList.remove('sticky');
      }
    });
  }

  render() {
    return (<div ref="stickyNav" data-sticky>
      {this.props.children}
    </div>);
  }
}
