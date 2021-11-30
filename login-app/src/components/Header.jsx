import React, { Component } from 'react';
import { ShoppingCartIcon  } from '@heroicons/react/outline';
import { Link } from 'react-router-dom';
import InputSearch from './InputSearch';

export default class Header extends Component {
  render() {
    return (
      <nav className="bg-gradient-to-r
        border-b-2 fixed flex
        from-gray-200 h-20
        justify-around px-5
        to-gray-100 w-full"
      >
        <Link to="/" className="flex">
          <div className="box-border flex items-center p-2">
            <h1 className="font font-extrabold text-4xl
              text-green-800
              tracking-tight"
            >
              ShopPutz
            </h1>
          </div>
        </Link>
        <InputSearch />
        <Link to="/" className="flex">
          <div className="flex">
            <ShoppingCartIcon className="text-green-800 w-1/2" />
          </div>
        </Link>
      </nav>
    )
  }
}
