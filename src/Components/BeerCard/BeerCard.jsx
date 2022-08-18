import { useState } from "react";
import "./BeerCard.scss"

const BeerCard = (props) =>{
    
    const {name, tagline, image_url} = props;

    const [show, setShow] = useState(false);

    const handleClick = () => {
        setShow(!show);
      };

    const frontCard  = (
    <div onMouseEnter={() => setShow(true)}  onMouseLeave={() => setShow(false)} className="beerCard">
    <img className="image" src= {image_url} alt="beerimg" />
    <h2 className="name">{name}</h2>
    <p className="tagline">{tagline}</p>
    <button onClick={handleClick}>ShowMore</button>
    </div>
    )

    const backCard  = (
        <div onMouseEnter={() => setShow(true)}  onMouseLeave={() => setShow(false)} className="beerCard">
        <img className="image" src="9V_TSmhr1_3aZwFIMzVk_RXxGggDXuWn=s0"  alt="beerimg" />
        <h2 className="name">{name}</h2>
        <p className="tagline">{tagline}</p>
        <button onClick={handleClick}>Stahp</button>
        </div>
        )

    return (
        <>
        {show ? backCard : frontCard}
        </>
    )

}

export default BeerCard