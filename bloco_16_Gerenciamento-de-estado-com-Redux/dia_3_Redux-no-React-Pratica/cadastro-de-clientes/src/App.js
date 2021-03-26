import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import { Provider } from 'react-redux';
import store from './store/index';

class App extends React.Component {
  render() {
    return(
      <Provider store={ store }>
        <BrowserRouter>
          <Switch>
            <Route path="/login" component={ Login } />
            <Route exact path="/" component={ Home } />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
