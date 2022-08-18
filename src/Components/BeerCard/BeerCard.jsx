import "./BeerCard.scss"

const BeerCard = (props) =>{
    
    const {name, tagline, image_url} = props;
    
    return (
        <div className="beerCard">
            <img className="image" src= {image_url} alt="beerimg" />
            <h2 className="name">{name}</h2>
            <p className="tagline">{tagline}</p>
        </div>
    )

}

export default BeerCard