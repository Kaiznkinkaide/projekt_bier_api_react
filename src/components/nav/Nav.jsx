import { Link } from "react-router-dom";

const Nav = () => {


    return ( 
        <>
        <nav>
            <Link to="/">Home   </Link>
            <Link to="/allebiere">Alle-Biere</Link>
        </nav>
        
        </>

     );
}
 
export default Nav;