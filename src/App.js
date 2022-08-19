import './App.css';
import { useState, useEffect, useRef } from 'react';
import BeerContainer from './Components/BeerContainer/BeerContainer';
import Nav from './Components/Nav/Nav';

const App = ()=> {
  

const [alc, setAlc] = useState();
const unfilteredArr = useRef([]);

//pulling in api
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


///nav functionality

//want input box value to lowercase to be saved in input then convert names of array items to lower than use .includes to find

const handleSearch = (event) =>{
  
  const cleanSearch = event.target.value.toLowerCase();
  
  const searchedBeerArr = unfilteredArr.current.filter((beer)=>{
    const something = beer.name.toLowerCase().includes(cleanSearch)
    return something})
    setAlc(searchedBeerArr)
}

const getAllBeer = () =>{
  const allBeerArr = unfilteredArr.current
  setAlc(allBeerArr)
}

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
        <Nav handleSearch= {handleSearch} getAllBeer= {getAllBeer} getClassicRange={getClassicRange} getHighAbvArr={getHighAbvArr} getBeer = {getBeer}  getAcidBeerArr = {getAcidBeerArr}/>
          {alc &&<BeerContainer beers = {alc}/>}
        </div>
    </div>
  );
}

export default App;
