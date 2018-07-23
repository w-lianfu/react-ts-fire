import * as React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  public render() {
    return (
      <div>
        <h3>React + TypeScript</h3>
        <p>Hello, Typescript!</p>
        <Link to="/about">About Page</Link>
      </div>
    )
  }
}

export default Home;
