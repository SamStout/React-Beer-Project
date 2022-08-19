import './App.css';
import { useState, useEffect } from 'react';
import BeerContainer from './Components/BeerContainer/BeerContainer';
import Nav from './Components/Nav/Nav';

function App() {

const [highAlcButton, setHighAlcButton] = useState(false)
  
const toggleHighAlc = () =>{
  setHighAlcButton(!highAlcButton)
  alert("hi")
}


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

const handleClick = () =>{
  setAlc()
}

let highAlcArr = []

// const createHighAlcArr = () => {
//   highAlc = alc.filter(beer=>beer.abv>6)
// };
const createHighAlcArr = () =>{
alc && (highAlcArr = alc.filter(beer=>beer.abv>6))
};



//{dick && will only run if dick is true, intial value of empty dick is false  
return (
    <div className="App">
        <h1>ITS BEER</h1>
        <div className='hi'>
          <Nav/>
          {alc &&<BeerContainer beers = {alc}/>}
        </div>
    </div>
  );
}

export default App;
