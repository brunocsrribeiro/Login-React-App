import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const linkStyled = `flex align-baseline 
font-bold text-sm
text-green-400
hover:text-green-600
focus:outline-none`;

export default class Registerform extends Component {
  render() {
    return (
      <div>
        <Link className={ linkStyled }>
          Cadastre-se
        </Link>
      </div>
    );
  }
}
