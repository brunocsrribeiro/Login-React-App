import React, { Component } from 'react';

import Titlecomponent from './TitleComponent';
import InputSearch from './InputSearch';
import Logincomponent from './LoginComponent';

const styledComponentIcons = `flex text-green-400
  hover:text-green-600 items-center justify-center`;

const headerNav = `bg-gradient-to-r border-b-2 fixed flex
from-gray-200 h-20 justify-between px-5
to-gray-100 w-full`;

const divTitle = `flex items-center`;

const divInputSearch = `flex w-full justify-center`;

export default class Header extends Component {
  render() {
    return (
      <nav className={ headerNav }
      >
        <div className={ divTitle }>
          <Titlecomponent />
        </div>

        <div className={ divInputSearch }>
          <InputSearch />
        </div>
        
        <div className={ styledComponentIcons }>
          <Logincomponent />
        </div>
      </nav>
    )
  }
}
