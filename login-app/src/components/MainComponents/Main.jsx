import React, { Component } from 'react';
import image from '../../image/undraw_web_shopping_re_owap.svg';

const mainSection = `flex items-center bg-gradient-to-r from-green-400
via-green-200 to-blue-400`;

const divImage = `flex items-center justify-center w-6/12`;

const imageStyled = `mt-40 mb-14 ml-20`;

const firstDivTitle = `flex flex-col items-center justify-center w-2/3`;

const secondDivTitle = `flex items-center justify-center w-full`;

const headingTitle = `bg-clip-text text-transparent
bg-gradient-to-r from-green-800 via-green-500 to-blue-800
font-extrabold text-9xl tracking-tight py-4`;

export default class Main extends Component {
  render() {
    return (
      <section className={ mainSection }>
        <div className={ divImage }>
          <img src={ image } alt="shop-puts-family" className={ imageStyled } />
        </div>
        <div className={ firstDivTitle }>
          <div className={ secondDivTitle }>
            <h1 className={ headingTitle }>
              Showcase
            </h1>
          </div>
        </div>
      </section>
    );
  }
}

