import React, { Component } from 'react';
import { GlobeIcon  } from '@heroicons/react/outline';

export default class Header extends Component {
  render() {
    return (
      <nav className="bg-gradient-to-r
        border-b-2 border-gray-200
        fixed flex from-gray-200
        h-16 justify-between
        to-gray-100 w-full"
      >
        <div className="box-border flex items-center p-2">
          <h1 className="text-4xl
            text-indigo-700
            tracking-tight"
          >
            Login App
          </h1>
        </div>
        <div className="flex">
          <GlobeIcon className="text-indigo-400 w-1/2" />
        </div>
      </nav>
    )
  }
}
