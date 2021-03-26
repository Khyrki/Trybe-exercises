import './App.css';
import React from 'react';
import Form from './components/Form';
import { Provider } from 'react-redux';
import store from './store/index';

class App extends React.Component {
  render() {
    return(
      <Provider store={ store }>
        <Form />
      </Provider>
    )
  }
}

export default App;
