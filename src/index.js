import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Features from './Features';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(
   	<BrowserRouter>
   		<div>
   			<Route exact path='/' component={App} />
   			<Route path='/features' component={Features} />
   		</div>
   	</BrowserRouter>
   	,
    document.getElementById('root')
);
registerServiceWorker();