import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { UserCircleIcon } from '@heroicons/react/outline';

const linkStyled = `flex focus:outline-none
justify-center`;

const spanStyled = `flex items-center
font-bold text-md
focus:outline-none`;

export default class Logincomponent extends Component {
  render() {
    return (
      <div>
        <Link to="/login" className={ linkStyled }
        >
          <div>
            <UserCircleIcon />
            <span className={ spanStyled }
            >
              Login
            </span>
          </div>
        </Link>
      </div>
    );
  }
}
