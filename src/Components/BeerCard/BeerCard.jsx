import { useState } from "react";
import "./BeerCard.scss"

const BeerCard = (props) =>{
    
    const {name, tagline, image_url, first_brewed, description} = props;

    const [show, setShow] = useState(false);


    const frontCard  = (
    <div onMouseEnter={() => setShow(true)}  onMouseLeave={() => setShow(false)} className="beerCard">
    <img className="image" src= {image_url} alt="beerimg" />
    <h2 className="name">{name}</h2>
    <p className="tagline">{tagline}</p>
    <p className="first_brewed"> Firt brewed: {first_brewed}</p>
    </div>
    )

    const backCard  = (
        <div onMouseEnter={() => setShow(true)}  onMouseLeave={() => setShow(false)} className="beerCard">
        <h2 className="name">{name}</h2>
        <p className="description">{description}</p>
        </div>
        )

    return (
        <>
        {show ? backCard : frontCard}
        </>
    )

}

export default BeerCard