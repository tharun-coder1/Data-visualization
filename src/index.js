import React, { Component } from 'react';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import Home from './pages/home';
import Graph from './pages/graph';
import Wordcloud from './pages/wordcloud';
import ReactDOM from "react-dom";

class App extends Component {
render() {
	return (
<div>

				<Router>
					<nav class="navbar navbar-expand-sm bg-dark navbar-dark">
						<ul className="navbar-nav">
						<li className="nav-item">
							<Link to="/" className="nav-link" >Home</Link>
						</li>
						<li className="nav-item">
							<Link to="/graph" className="nav-link">Graph visualization</Link>
						</li>
						<li className="nav-item">
							<Link to="/wordcloud" className="nav-link">Word Cloud</Link>
						</li>
						</ul>
					</nav>

				<Routes>
				<Route exact path='/' element={< Home />}></Route>
				<Route exact path='/graph' element={< Graph />}></Route>
				<Route exact path='/wordcloud' element={< Wordcloud />}></Route>
				</Routes>
			</Router>


</div>
);
}
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);