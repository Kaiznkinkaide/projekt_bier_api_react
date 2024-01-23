import { Link } from "react-router-dom";
import Nav from "../../components/nav/Nav";
import bild1 from "../../assets/img/bild1.jpg"
import bild2 from "../../assets/img/bild2.png"



const Home = () => {
    return ( 
        <>
        <Link to='/allebiere'>
            <div className="home">
            <img src={bild1} />
            <p>All Beers</p>
            </div>
        </Link>
        <article>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam recusandae iste corporis. Nesciunt debitis cumque excepturi mollitia eum repellat, quidem explicabo temporibus suscipit ipsa beatae? Officia harum inventore quidem saepe!</article>
        <Link to='/allebiere/random'>
            <div className="home">
                <img src={bild2}  />
                <p>Random Beer</p>
            </div>
        </Link>
        <article>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore dolorum minima beatae eveniet nisi quam dicta tenetur fugiat, ullam officia aut ducimus, vel at maiores vitae laudantium? Unde, adipisci iusto?</article>
        
       
       


        
        
        </>
     );
}
 
export default Home;