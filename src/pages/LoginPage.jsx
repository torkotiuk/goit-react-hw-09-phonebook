import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import authOper from '../redux/auth/auth-operations';

//styles
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import scss from './RegisterPage.module.scss';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const handleSubmit = evt => {
    evt.preventDefault();

    dispatch(authOper.logIn({ email: `${email}`, password: `${password}` }));

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

export default LoginPage;
