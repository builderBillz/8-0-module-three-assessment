import { Link } from "react-router-dom";
import "./Nav.css"

function Nav () {
    return (
      <nav>
        <article>
          <h1>
            <Link to="/">
                <img src='https://ghiblicollection.com/media_cache/userFiles/uploads/Home%20Page/optimized/max2000/Mononoke-Hero-Desktop.jpg' alt="Splash." />
            </Link>
          </h1>
        </article>
        {/* <aside>
          <ul>
            <li>
              <Link to="/staff">All Staff</Link>
            </li>
            <li>
              <Link to="/pets">All Pets</Link>
            </li>
          </ul>
        </aside> */}
      </nav>
    );
  };

  export default Nav