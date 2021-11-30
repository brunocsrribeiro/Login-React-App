import { SearchCircleIcon } from '@heroicons/react/outline';
import React, { Component } from 'react';

export default class InputSearch extends Component {
  render() {
    return (
      <div className="flex items-center
        justify-center w-3/4"
      >
        <input
          type="text"
          className="appearance-none focus:shadow-outline
          border border-green-400
          shadow placeholder-green-700
          placeholder-opacity-50 py-2
          pl-4 focus:outline-none
          rounded-full w-full
          text-green-600 text-sm
          tracking-wide"
          placeholder="Pesquisar"
        />
        <button type="submit" className="rounded-full
          focus:outline-none relative
          -left-9"
        >
          <SearchCircleIcon className="
            text-green-400 w-8
            hover:text-white
            hover:bg-green-400
            rounded-full"
          />
        </button>
      </div>
    )
  }
}
