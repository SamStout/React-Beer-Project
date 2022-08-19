import "./Nav.scss"

const Nav = props => {
    const {toggleHighAlc} = props;

    
    
    return(
        
    <nav className="navBar">
        <div>All Beers</div>
        <div>Classic Range</div>
        <div>High Acidity</div>
        <button onClick={toggleHighAlc}>High Alcohol</button>
    </nav>      
        
)
}

export default Nav