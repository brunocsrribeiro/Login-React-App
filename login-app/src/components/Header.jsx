import React, { Component } from 'react';
import { ShoppingCartIcon, UserCircleIcon  } from '@heroicons/react/outline';
import { Link } from 'react-router-dom';
import InputSearch from './InputSearch';

export default class Header extends Component {
  render() {
    return (
      <nav className="bg-gradient-to-r
        border-b-2 fixed flex
        from-gray-200 h-20
        justify-between px-5
        to-gray-100 w-full"
      >
        <Link to="/" className="flex focus:outline-none">
          <div className="box-border flex items-center">
            <h1 className="font font-extrabold text-4xl
              text-green-800 hover:text-green-500
              tracking-tight"
            >
              ShopPutz
            </h1>
          </div>
        </Link>
        <div className="flex w-full justify-center">
          <InputSearch />
        </div>
        <Link to="#" className="flex focus:outline-none justify-center">
          <div className="flex justify-center text-green-800
              hover:text-green-400 w-2/3 animate-pulse">
            <UserCircleIcon />
            <span className="flex items-center
              font-bold text-md
              focus:outline-none"
            >
              Login
            </span>
          </div>
        </Link>
        <Link to="#" className="flex focus:outline-none justify-center">
          <div className="flex justify-center text-green-800
              hover:text-green-400 w-3/6">
            <ShoppingCartIcon />
          </div>
        </Link>
      </nav>
    )
  }
}
