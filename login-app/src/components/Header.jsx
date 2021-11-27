import React, { Component } from 'react';
import { GlobeIcon  } from '@heroicons/react/outline';

export default class Header extends Component {
  render() {
    return (
      <nav className="
        flex h-16
        bg-gradient-to-r
        from-gray-200
        justify-between
        to-gray-100"
      >
        <div className="flex items-center box-border p-2 pl-10">
          <h1 className="
            text-4xl
            tracking-tight
            text-blue-700"
          >
            Login App
          </h1>
        </div>
        <div className="flex">
          <GlobeIcon className="w-1/2 text-indigo-400" />
        </div>
      </nav>
    )
  }
}
