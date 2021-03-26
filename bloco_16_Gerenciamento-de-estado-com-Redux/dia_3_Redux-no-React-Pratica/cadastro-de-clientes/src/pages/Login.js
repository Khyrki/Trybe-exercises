import React from 'react';
import { Link } from 'react-router-dom'
import login from '../actions'
import { connect } from 'react-redux';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      user: '',
      password: '',
    }
    this.capturesInputValue =  this.capturesInputValue.bind(this);
  }

  capturesInputValue({ target }) {
    this.setState({
      [target.name]: target.value,
    })
  }

  render() {
    const { user, password } = this.state;
    const { login } = this.props;
    return(
      <>
        <p>LOGIN</p>
        <form>
          <label>
            login
            <input
              type="text"
              onChange={ this.capturesInputValue }
              name='user'
            />
          </label>
          <label>
            senha
            <input
              type='password'
              onChange={ this.capturesInputValue }
              name='password'
            />
          </label>
        </form>
        <Link
          to='/customers'
          onClick={() => login(user, password) }
        >
          Login
        </Link>
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  login: (user, password) => dispatch(login(user, password)),
})

export default connect(null, mapDispatchToProps)(Login);
