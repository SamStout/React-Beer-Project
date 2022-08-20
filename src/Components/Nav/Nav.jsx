import "./Nav.scss"

const Nav = props => {
    
    const {searchTerm, handleSearch, getAllBeer,getAcidBeerArr, getHighAbvArr, getClassicRange} = props;

    return (
        
    <nav className="navBar">
        <input onInput={handleSearch} value={searchTerm} placeholder="Find Beer" type="text" />
        <button onClick={getAllBeer}>All Beers</button>
        <button onClick={getClassicRange}>Classic Range</button>
        <button onClick={getHighAbvArr}>High ABV</button>
        <button onClick={getAcidBeerArr} >High Acidity</button> 

         {/* <button onClick={() => setBeers(filteredAcidityArr)} >High Alcohol</button> */}
    </nav>      
        
)
}

export default Nav