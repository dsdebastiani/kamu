import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import ProfileService from './services/ProfileService';
import '../css/index.css';
import '../css/App.css'

ReactDOM.render(
  <Header service={new ProfileService()} showMenu={window.location.pathname !== '/'} />,
  document.getElementById('app-bar')
);
