import React, { Component } from 'react';

import Titlecomponent from './TitleComponent';
import InputSearch from './InputSearch';
import Logincomponent from './LoginComponent';

const styledComponentIcons = `flex text-green-400
  hover:text-green-600 items-center justify-center`;

export default class Header extends Component {
  render() {
    return (
      <nav className="bg-gradient-to-r border-b-2 fixed flex
        from-gray-200 h-20 justify-between px-5
        to-gray-100 w-full"
      >
        <div className="flex items-center">
          <Titlecomponent />
        </div>

        <div className="flex w-full justify-center">
          <InputSearch />
        </div>
        
        <div className={ styledComponentIcons }>
          <Logincomponent />
        </div>
      </nav>
    )
  }
}
