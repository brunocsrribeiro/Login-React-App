import React, { Component } from 'react';

import Inputemailform from './InputEmailForm';
import Inputpassform from './InputPassForm';
import Buttonenterform from './ButtonEnterForm';
import Forgotpassword from './ForgotPassword';
import Registerform from './RegisterForm';

const formStyled = `flex flex-col items-center w-full`;

export default class Form extends Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
    };
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (evt) => {
    evt.preventDefault();
  };

  render() {
    const { email, password } = this.state;
    
    return (
        <form className={ formStyled } onSubmit={ this.handleSubmit }>
          <Inputemailform email={ email } handleChange={ this.handleChange } />
          <Inputpassform password={ password } handleChange={ this.handleChange } />
          <Buttonenterform />
          <Forgotpassword />
          <Registerform />
        </form>
    );
  }
}
