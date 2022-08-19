import './App.css';
import { useState, useEffect, useRef } from 'react';
import BeerContainer from './Components/BeerContainer/BeerContainer';
import Nav from './Components/Nav/Nav';

const App = ()=> {
  
const [alc, setAlc] = useState();
console.log(alc)
const unfilteredArr = useRef([])



const getBeer = () =>{
  fetch("https://api.punkapi.com/v2/beers")
  .then((res)=>{
    return res.json()
  })
  .then ((beer) => {
    setAlc(beer)
    unfilteredArr.current = beer

  })
}

useEffect(getBeer,[])

const getClassicRange = () =>{
  const filteredClassicArr = unfilteredArr.current.filter((beer)=>{
  return beer.first_brewed.slice(3) < 2010 })
  setAlc(filteredClassicArr)
}

const getAcidBeerArr = () =>{
  const filteredAcidityArr = unfilteredArr.current.filter((beer)=>{
  return beer.ph<4 })
  setAlc(filteredAcidityArr)
}

const getHighAbvArr = () =>{
  const filteredHighAbvArr = unfilteredArr.current.filter((beer)=>{
  return beer.abv>6 })
  setAlc(filteredHighAbvArr)
}

return (

    <div className="App">
        <h1>ITS BEER</h1>
        <div className='hi'>
        <Nav getClassicRange={getClassicRange} getHighAbvArr={getHighAbvArr} getBeer = {getBeer}  getAcidBeerArr = {getAcidBeerArr}/>
          {alc &&<BeerContainer beers = {alc}/>}
        </div>
    </div>
  );
}

export default App;
