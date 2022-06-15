import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import Edit from './Component/Edit';
import Create from './Component/Create';
import Show from './Component/Show';
import reportWebVitals from './reportWebVitals';
import Home from './Component/Home';
import Login from './Component/Login';
import Registrasi from './Component/Registrasi';

ReactDOM.render(
  <Router>
      <div>
        <Route exact path='/' component={Login} />
        <Route path='/edit/:id' component={Edit} />
        <Route path='/create' component={Create} />
        <Route path='/show/:id' component={Show} />
        <Route path="/app" component={App} />
        {/* <Route path="/login" component={Login}/> */}
        <Route path="/registrasi" component={Registrasi}/>
      </div>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
