import { SearchCircleIcon } from '@heroicons/react/outline';
import React, { Component } from 'react';

const divInputSearch = `flex items-center
justify-center w-3/4`;

const InputSearchText = `appearance-none focus:shadow-outline
border border-green-400
shadow placeholder-green-700
placeholder-opacity-50 py-2
pl-4 focus:outline-none
rounded-full w-full
text-green-600 text-sm
tracking-wide`;

const buttonStyled = `rounded-full
focus:outline-none relative
-left-9`;

const buttonImage = `text-green-400 w-8
hover:text-white hover:bg-green-400
rounded-full`;

export default class InputSearch extends Component {
  render() {
    return (
      <div className={ divInputSearch }>
        <input
          type="text"
          className={ InputSearchText }
          placeholder="Pesquisar"
        />
        <button type="submit" className={ buttonStyled }>
          <SearchCircleIcon className={ buttonImage } />
        </button>
      </div>
    )
  }
}
