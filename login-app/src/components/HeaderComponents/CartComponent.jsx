import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCartIcon } from '@heroicons/react/outline';

class Cartcomponent extends Component {
  render() {
    return (
      <div>
        <Link to="#" className="flex focus:outline-none justify-center">
          <div>
            <ShoppingCartIcon />
          </div>
        </Link>
      </div>
    );
  }
}

export default Cartcomponent;
