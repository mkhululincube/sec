import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LogoBar from './components/header/logoBar';
import Footer from './components/footer/footer';
import Topbar from './components/header/topbar';
import Home from './components/home/home';
import Login from './components/auth/login';
import AuthVerify from './containers/auth/authVerify';
import Logout from './components/auth/logout';
// import AddCitizen from './components/citizen/addCitizen';
import LearnMore from './components/pages/learnMore';
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
<Route exact path="/logout" component={Logout} />
<Route exact path="/learnMore" component={LearnMore} />

<Route path="/citizenDetails/:citizenId"  component={CitizenDetailsContainer} />

<Route path="/citizens" component={CitizenContainer} />
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
