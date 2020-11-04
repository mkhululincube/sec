import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import LogoBar from './components/header/logoBar';
import Footer from './components/footer/footer';
import Topbar from './components/header/topbar';
import Home from './components/home/home';

function App() {
  return (
<Router>
<Topbar/>
<LogoBar />
<Switch>
<Route exact path="/" component={Home} />

</Switch>

<Footer />
</Router>
);
}

export default App;
