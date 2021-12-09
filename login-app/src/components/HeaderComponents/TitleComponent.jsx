import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Titlecomponent extends Component {
  render() {
    return (
      <div>
        <Link to="/" className="flex focus:outline-none">
          <div>
            <h1 className="font font-extrabold text-4xl
              bg-clip-text text-transparent
              bg-gradient-to-r from-green-800 via-green-500
              to-blue-800 hover:text-green-500
              tracking-tight"
            >
              Lifestyle
            </h1>
          </div>
        </Link>
      </div>
    );
  }
}

export default Titlecomponent;
