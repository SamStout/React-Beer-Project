import './App.css';
import { useState, useEffect } from 'react';
import BeerContainer from './Components/BeerContainer/BeerContainer';
import Nav from './Components/Nav/Nav';

function App() {

  
const [alc, setAlc] = useState();


const getBeer = () =>{
  fetch("https://api.punkapi.com/v2/beers")
  .then((res)=>{
    return res.json()
  })
  .then ((beer) => {
    setAlc(beer)
    console.log(beer)
  })
}
useEffect(getBeer,[])

//{dick && will only run if dick is true, intial value of empty dick is false  
return (
    <div className="App">
        <h1>ITS BEER</h1>
        <Nav/>
        {alc &&<BeerContainer beers = {alc}/>}
    </div>
  );
}

export default App;
