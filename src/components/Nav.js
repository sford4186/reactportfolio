import { Link } from "react-router-dom";

function Nav() {
  return (
    

    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">Shawanda Ford</Link>
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/"
            className={window.location.pathname === "/"
                  ? "nav-link active"
                  : "nav-link"} >
                      About
            </Link>
          </li>
     
          <li className="nav-item">
            <Link
              to="/projects"
              className={window.location.pathname === "/projects" 
              ? "nav-link active" : "nav-link"}>
              Projects
            </Link>
          </li>
       

          <li className="nav-item">
            <Link
              to="/contact"
              className={window.location.pathname === "/contact" 
              ? "nav-link active" : "nav-link"}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
    
    
  );
}


export default Nav;