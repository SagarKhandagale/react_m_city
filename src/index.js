import React from 'react';
import ReactDOM from 'react-dom/client';
import './Resources/css/app.css'
import MyRoutes from './routes';
import { firebase } from './firebase';

const App = (props) => {
  return (<MyRoutes {...props}/>);
}

const root = ReactDOM.createRoot(document.getElementById('root'));

firebase.auth().onAuthStateChanged((user) => {
  root.render(<App user={user}/>);
})


