import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import GeneralPage from './GeneralPage';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(
   	<BrowserRouter>
   		<div>
   			<Route exact path='/' component={App} />
   			<Route path='/general-page' component={GeneralPage} />
   		</div>
   	</BrowserRouter>
   	,
    document.getElementById('root')
);
registerServiceWorker();