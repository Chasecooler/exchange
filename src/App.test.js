import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

// Notes:
// mongodb+srv://<username>:<password>@clusterexchange-zr1h7.mongodb.net/test?retryWrites=true&w=majority