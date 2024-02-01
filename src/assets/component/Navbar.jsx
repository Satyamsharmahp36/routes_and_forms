import { Link } from "react-router-dom";

export default function NavBar(){
    return(
        <nav>
            <Link id="home" to="/" className="kal"> Kalvium </Link>
            <div>
        <Link to="/contact" className="con">  Contact </Link>
        <Link to="/registration" className="reg"> Registration &#32; &#32; &#32; &#32;</Link>
        </div>
        </nav>
    )
}