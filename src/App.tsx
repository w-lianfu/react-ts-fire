import * as React from 'react';

interface Props {
  name: string;
}
interface State {
  num: number;
}

class App extends React.Component<Props, State> {
  public state = {
    num: 100
  };

  public render() {
    const { name } = this.props;
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">To get started</p>
        <p>{name}</p>
        <p>{this.state.num}</p>
      </div>
    );
  }
}

export default App;
