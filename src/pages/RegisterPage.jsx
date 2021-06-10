import React, { Component } from 'react';
import { connect } from 'react-redux';
import authOper from '../redux/auth/auth-operations';

//styles
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import scss from './RegisterPage.module.scss';

class RegisterPage extends Component {
  state = {
    name: '',
    email: '',
    password: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onRegister(this.state);
    this.setState({ name: '', email: '', password: '' });
  };

  render() {
    const { name, email, password } = this.state;
    return (
      <div className={scss.Container}>
        <h1 className={scss.Title}>Register page</h1>

        <form
          onSubmit={this.handleSubmit}
          className={scss.form}
          autoComplete="off"
        >
          <div className={scss.Items}>
            <TextField
              className={scss.Items}
              id="outlined-basic"
              fullWidth
              label="Name"
              variant="outlined"
              type="text"
              name="name"
              value={name}
              onChange={this.handleChange}
            />
          </div>

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
              onChange={this.handleChange}
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
              onChange={this.handleChange}
            />
          </div>

          <div className={scss.Btn}>
            <Button type="submit" variant="contained" size="big">
              Register
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

// register --- was taken from operations
// const mapDispatchToProps = dispatch => ({
//   onRegister: data => dispatch(register(data)),
// });
// short form of previous 3 lines
const mapDispatchToProps = {
  onRegister: authOper.register,
};

export default connect(null, mapDispatchToProps)(RegisterPage);
// export default RegisterPage;
