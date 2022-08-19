import "./Nav.scss"

const Nav = props => {
    const {getAcidBeerArr ,getBeer, getHighAbvArr, getClassicRange} = props;
    
    return (
        
    <nav className="navBar">
        <button onClick={getBeer}>All Beers</button>
        <button onClick={getClassicRange}>Classic Range</button>
        <button onClick={getHighAbvArr}>High ABV</button>
        <button onClick={getAcidBeerArr} >High Acidity</button> 

         {/* <button onClick={() => setBeers(filteredAcidityArr)} >High Alcohol</button> */}
    </nav>      
        
)
}

export default Nav