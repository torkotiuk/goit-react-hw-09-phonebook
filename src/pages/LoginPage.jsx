import React, { useState } from 'react';
import { connect } from 'react-redux';
import authOper from '../redux/auth/auth-operations';

//styles
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import scss from './RegisterPage.module.scss';

const LoginPage = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // v-1. we could change handleChange by next fn-s
  // const updateEmail = evt => {
  //   setEmail(evt.target.value);
  // };
  // const updatePassword = evt => {
  //   setPassword(evt.target.value);
  // };
  // v-2. Via inline callback

  const handleSubmit = evt => {
    evt.preventDefault();

    onLogin({ email: `${email}`, password: `${password}` });

    setEmail('');
    setPassword('');
  };

  return (
    <div className={scss.Container}>
      <h1 className={scss.Title}>Log in page</h1>

      <form onSubmit={handleSubmit} className={scss.form} autoComplete="off">
        <div className={scss.Items}>
          <TextField
            className={scss.Items}
            id="outlined-basic"
            fullWidth
            label="Email"
            variant="outlined"
            type="email"
            name="email"
            value={email}
            onChange={evt => setEmail(evt.target.value)}
          />
        </div>
        <div className={scss.Items}>
          <TextField
            id="outlined-basic"
            fullWidth
            label="Password"
            variant="outlined"
            type="password"
            name="password"
            value={password}
            onChange={evt => setPassword(evt.target.value)}
          />
        </div>

        <div className={scss.Btn}>
          <Button type="submit" variant="contained" size="big">
            Log in
          </Button>
        </div>
      </form>
    </div>
  );
};

const mapDispatchToProps = {
  onLogin: authOper.logIn,
};

export default connect(null, mapDispatchToProps)(LoginPage);
