import React from 'react';
import { Link } from 'react-router-dom'

class Home extends React.Component {
  render() {
    return(
      <>
        <p>HOME</p>
        <Link to="/"><p>Home</p></Link>
        <Link to="/login"><p>Login</p></Link>
      </>
    );
  }
}

export default Home;
