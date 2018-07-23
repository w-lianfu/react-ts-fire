import * as React from 'react';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react';

import HomeStore from './store';
import { STButton } from '@/utils/styled/STButton';
import './main.scss';

const store = new HomeStore();

@observer
class Home extends React.Component {
  public render() {
    return (
      <div>
        <h3>React + TypeScript</h3>
        <p className="red">Hello, Typescript!</p>
        <Link to="/about">About Page</Link>
        <p>{store.total}</p>
        <STButton onClick={store.increment}>Increment</STButton>
      </div>
    )
  }
}

export default Home;
