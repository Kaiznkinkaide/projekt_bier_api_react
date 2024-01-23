import { Link } from "react-router-dom";
import Nav from "../../components/nav/Nav";

const Home = () => {
    return ( 
        <>
        <Nav/>
        <h1>Home</h1>
        <Link to='/allebiere/random'><button>Random</button></Link>
        
        </>
     );
}
 
export default Home;