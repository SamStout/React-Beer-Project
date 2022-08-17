const BeerCard = (props) =>{
    
    const {name, tagline} = props;
    console.log({name}, "HENLO")
    
    return (
        <div>
            <h1>{name}</h1>
            <p>{tagline}</p>
        </div>
    )

}

export default BeerCard