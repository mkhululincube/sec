import React, {useEffect, Suspense, Lazy} from 'react';
import Slider from '../slider/slider';
import Bar from '../bar/bar';
import globalstyle from '../../style.module.css';
import Search from '../search/search';
import SearchBar from '../search/searchBar';
import Menu from '../menu/menu';
 
const CitizenContainer = React.lazy(() => import('../../containers/citizen/citizenContainer'));

function Home() {

     
return (
<>
{/* <Slider/>
<Bar/> */}

<div className={globalstyle.container}>

<SearchBar />

<Menu />

<Suspense fallback={
  <div className={globalstyle.loadingContainer}>
<div className={globalstyle.loading}>loading ...
</div>
</div>
}>
  <CitizenContainer />

</Suspense>

</div>
</>
);
}

export default Home;
