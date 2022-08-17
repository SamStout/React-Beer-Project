import './App.css';
import { useState, useEffect } from 'react';
import BeerContainer from './Components/BeerContainer/BeerContainer';


function App() {

  
const [dick, setDick] = useState();


const getBeer = () =>{
  fetch("https://api.punkapi.com/v2/beers")
  .then((res)=>{
    return res.json()
  })
  .then ((beer) => {
    setDick(beer)
    console.log(beer)
  })
}
useEffect(getBeer,[])

//{dick && will only run if dick is true, intial value of empty dick is false  
return (
    <div className="App">
    {dick &&<BeerContainer beers = {dick}/>}
    
    </div>
  );
}

export default App;
