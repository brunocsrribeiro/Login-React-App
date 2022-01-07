import React, { Component } from 'react';
import NotFound from '../../image/undraw_page_not_found_re_e9o6.svg';

export default class Notfound extends Component {
  render() {
    return (
      <div className='flex flex-col items-center justify-center'>
        <img src={ NotFound } alt="Erro 404" className='flex w-1/3' />
        <h1 className='flex text-4xl font-extrabold mt-20'>
          Ops... está página não foi encontrada
        </h1>
      </div>
    );
  }
}
