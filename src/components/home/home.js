import React, { Suspense, Lazy} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";
import Slider from '../slider/slider';
import Bar from '../bar/bar';
import globalstyle from '../../style.module.css';
import Search from '../search/search';
import SearchBar from '../search/searchBar';
import Menu from '../menu/menu';
import HeaderStatus from '../../containers/settings/headerStatus';
import AddCitizen from '../citizen/addCitizen';
 
const CitizenContainer = React.lazy(() => import('../../containers/citizen/citizenContainer'));

function Home() {

let { path, url } = useRouteMatch();

HeaderStatus(true) ;
     
return (
<>
{/* <Slider/>
<Bar/> */}



<div className={globalstyle.container}>

{/* <SearchBar /> */}

<Menu />


</div>

<Suspense fallback={
 <div className={globalstyle.loading}>loading ...
 </div>
}>
  <CitizenContainer />

</Suspense>


</>
);
}

export default Home;
