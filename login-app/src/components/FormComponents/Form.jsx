import React, { Component } from 'react';

import Inputemailform from './InputEmailForm';
import Inputpassform from './InputPassForm';
import Buttonenterform from './ButtonEnterForm';
import Forgotpassword from './ForgotPassword';
import Registerform from './RegisterForm';

export default class Form extends Component {
  render() {
    return (
      <div className="w-full">
        <form className="flex flex-col items-center">
            <Inputemailform />
            <Inputpassform />
            <Buttonenterform />
            <Forgotpassword />
            <Registerform />
          </form>
      </div>
    );
  }
}
