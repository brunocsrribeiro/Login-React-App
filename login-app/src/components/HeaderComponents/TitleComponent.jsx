import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const headingStyled = `font font-extrabold text-4xl
bg-clip-text text-transparent
bg-gradient-to-r from-green-800 via-green-500
to-blue-800 hover:text-green-600
tracking-tight`;

const linkStyled = `flex focus:outline-none`;

class Titlecomponent extends Component {
  render() {
    return (
      <Link to="/" className={ linkStyled }>
        <h1 className={ headingStyled }>
          Showcase
        </h1>
      </Link>
    );
  }
}

export default Titlecomponent;
