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

//creates acid beer

///this will call and set the initial arr with the acid beer
//let filteredAcidityArr= []

const getAcidBeerArr = () =>{
//setAlc(unfilteredArr.current)
const filteredAcidityArr = unfilteredArr.current.filter((beer)=>{
return beer.ph<4})
setAlc(filteredAcidityArr)
}


/// High ABV ARR

const getHighAbvArr = () =>{

const filteredHighAbvArr = unfilteredArr.current.filter((beer)=>{
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
