import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { UserCircleIcon } from '@heroicons/react/outline';

class Logincomponent extends Component {
  render() {
    return (
      <div>
        <Link to="#" className="flex focus:outline-none
          justify-center"
        >
          <div>
            <UserCircleIcon />
            <span className="flex items-center
              font-bold text-md
              focus:outline-none"
            >
              Login
            </span>
          </div>
        </Link>
      </div>
    );
  }
}

export default Logincomponent;
