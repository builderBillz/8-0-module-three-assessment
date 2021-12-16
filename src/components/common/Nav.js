import { Link } from "react-router-dom";
import "./Nav.css"

function Nav () {
    return (
      <nav>
        <article>
            <Link to="/">
                <img src='https://ghiblicollection.com/media_cache/userFiles/uploads/Home%20Page/optimized/max2000/Mononoke-Hero-Desktop.jpg' alt="Princess Mononoke" />
            </Link>
        </article>
        <article>
          <Link to="/movies"><h2>Movies</h2></Link>    
        </article>
        <article> 
          <Link to="/people"><h2>People</h2></Link> 
        </article>              
        <article>
          <Link to="/locations"><h2>Locations</h2></Link>    
        </article>              
            {/* <li>
              <Link to="/pets">All Pets</Link>
            </li> */}
      </nav>
    );
  };

  export default Nav