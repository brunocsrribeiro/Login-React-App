import React, { Component } from 'react';

import Inputemailform from './InputEmailForm';
import Inputpassform from './InputPassForm';
import Buttonenterform from './ButtonEnterForm';
import Forgotpassword from './ForgotPassword';
import Registerform from './RegisterForm';

const formStyled = `flex flex-col items-center w-full`;

export default class Form extends Component {
  render() {
    return (
        <form className={ formStyled }>
          <Inputemailform />
          <Inputpassform />
          <Buttonenterform />
          <Forgotpassword />
          <Registerform />
        </form>
    );
  }
}
