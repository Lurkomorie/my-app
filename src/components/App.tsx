// app.tsx

import * as React from 'react';
import '../App.css';


class App extends React.Component<any,any> {
  public render() {
    return (
      <div>
          {this.props.children}
      </div>
    );
  }
}

export default App;
