import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Forgotpassword extends Component {
  render() {
    return (
      <div>
        <Link className="flex align-baseline items-center
          font-bold text-sm
          text-green-400 mb-2
          hover:text-green-600
          focus:outline-none"
        >
          Esqueci minha senha?
        </Link>
      </div>
    );
  }
}

export default Forgotpassword;
