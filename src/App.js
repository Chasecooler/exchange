

import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/navbar.component";

import ExchangesList from "./components/exchanges-list.component";

import EditExchange from "./components/edit-exchange.component";

import CreateExchange from "./components/create-exchange.component";

import CreateUser from "./components/create-user.component";

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />

        <br />

        <Route path="/" exact component={ExchangesList} />

        <Route path="/edit/:id" component={EditExchange} />

        <Route path="/create" component={CreateExchange} />

        <Route path="/user" component={CreateUser} />
      </div>
    </Router>
  );
}

export default App;

// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
