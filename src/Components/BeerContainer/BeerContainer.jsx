import BeerCard from "../BeerCard/BeerCard";

const BeerContainer = (props) =>{

    console.log(props, "imprintings")
    const {beers} = props;
  
    //creating key beers is now equal props,
    //creating keys so no need to do props.beers.name
    //deconstructed again so can now just use name/ tagline instead of beers.name/ beers.tagline
console.log(beers)

    const beerArr = beers.map((beer) =>{
        
        return(
            <BeerCard name= {beer.name} tagline= {beer.tagline}/>
        )
    })
    
    return (
        <div>
            {beerArr}
        </div>
    )
}

export default BeerContainer