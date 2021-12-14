import React, { Component } from 'react';
import PropTypes from 'prop-types';

const styleInput = `border-b-2 border-green-400
  flex focus:outline-none
  font-bold mb-2 p-3
  placeholder-green-700
  placeholder-opacity-50
  text-center text-green-600
  text-sm tracking-wide w-full`;

  export default class Inputpassform extends Component {
  render() {
    const { password, handleChange } = this.props;
    return (
      <div className="w-9/12">
        <input
          type="password"
          value={ password }
          onChange={ handleChange }
          name="password"
          className={ styleInput }
          placeholder="Senha"
          required
        />
      </div>
    );
  }
}

Inputpassform.propTypes = {
  password: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
