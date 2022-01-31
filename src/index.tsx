import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Welcome to votevote. You can do anything at votevote.
        </p>
      </header>
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

