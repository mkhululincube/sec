import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LogoBar from './components/header/logoBar';
import Footer from './components/footer/footer';
import Topbar from './components/header/topbar';
import Home from './components/home/home';
import Login from './components/auth/login';
import AuthVerify from './containers/auth/authVerify';
import CitizenContainer from './containers/citizen/citizenContainer';
import CitizenDetailsContainer from './containers/citizen/citizenDetailsContainer';

function App(props) {
const showHeaderState = useSelector(state=>state.ShowHeader);
return (
<Router>
{ showHeaderState ?
<>
<Topbar/>
<LogoBar />
</>
:
null
}

<Switch>
<Route exact path="/" component={Login} />

<AuthVerify path="/citizenDetails/:citizenId">
<Route path="/citizenDetails/:citizenId"  component={CitizenDetailsContainer} />
</AuthVerify>

<AuthVerify path="/citizens">
<Route path="/citizens" component={CitizenContainer} />
</AuthVerify>

<AuthVerify path="/home">
<Route path="/home"  component={Home} /> 
</AuthVerify>
</Switch>

{ showHeaderState ?
<Footer />
:
null
}
</Router>
);
}

export default App;
