import './App.css';
import { useState, useEffect } from 'react';
import BeerContainer from './Components/BeerContainer/BeerContainer';
import Nav from './Components/Nav/Nav';

const App = ()=> {
  
const [alc, setAlc] = useState();

const getBeer = () =>{
  fetch("https://api.punkapi.com/v2/beers")
  .then((res)=>{
    return res.json()
  })
  .then ((beer) => {
    setAlc(beer)
  })
}
useEffect(getBeer,[])

//creates acid beer

///this will call and set the initial arr with the acid beer
let filteredAcidityArr=[]

const getAcidBeerArr = () =>{
filteredAcidityArr = alc.filter((beer)=>{
return beer.ph>6})
setAlc(filteredAcidityArr)
}
let filteredHighAbvArr=[]

const getHighAbvArr = () =>{
filteredHighAbvArr = alc.filter((beer)=>{
return beer.abv>6})
setAlc(filteredHighAbvArr)
}

return (

    <div className="App">
        <h1>ITS BEER</h1>
        <div className='hi'>
          <Nav getHighAbvArr={getHighAbvArr} getBeer = {getBeer}  getAcidBeerArr = {getAcidBeerArr}/>
          {alc &&<BeerContainer beers = {alc}/>}
        </div>
    </div>
  );
}

export default App;
