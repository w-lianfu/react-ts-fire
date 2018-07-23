import * as React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from '@comp/home';
import About from '@comp/about';
import Page404 from '@comp/common/page404';

import '@/utils/scss/main.scss';

class App extends React.Component {
  public render() {
    return (
      <Router>
        <Switch>
          <Route exact={true} path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route component={Page404} />
        </Switch>
      </Router>
    )
  }
}

export default App;
