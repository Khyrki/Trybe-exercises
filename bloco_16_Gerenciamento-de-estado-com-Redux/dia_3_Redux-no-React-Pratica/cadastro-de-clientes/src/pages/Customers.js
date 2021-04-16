import React from 'react';
import { connect } from 'react-redux';

class Customers extends React.Component {
  constructor() {
    super()
    this.state = {
      authenticated: false,
    }
    this.authenticates = this.authenticates.bind(this);
  }

  authenticates(user, password) {
    if( user === 'trybe@gmail.com' && password === '123456') {
      this.setState({ authenticated: true })
    }
  }

  componentDidMount() {
    this.authenticates(this.props.user, this.props.password);
  }

  render() {
    const { authenticated } = this.state;
    if(!authenticated) return <p>Login não efetuado</p>
    return(
      <>
        <button type='button'>Página de cadastro</button>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.setUserAndPassword.user,
  password: state.setUserAndPassword.password,
})

export default connect(mapStateToProps)(Customers);
