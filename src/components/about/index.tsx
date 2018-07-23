import * as React from 'react';
import { Link } from 'react-router-dom';

import { STButton } from '@/utils/styled/STButton';

class About extends React.Component {
  public render() {
    return (
      <div>
        <h3>About Page...</h3>
        <p><STButton>Hello, Vue</STButton></p>
        <Link to="/">Home Page</Link>
      </div>
    )
  }
}

export default About;
