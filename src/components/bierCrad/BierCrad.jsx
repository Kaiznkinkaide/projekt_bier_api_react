import { Link, useParams } from "react-router-dom";
import BierDetails from "../bierdetails/BierDetails";

const BierCard = ({bier}) => {

    const id = useParams()




    return ( 
        <>
        
        <img className="allebiereImg" src={bier.image_url} />
        <div className="bierFacts">
            <h2>{bier.name}</h2>
            <h4>{bier.tagline}</h4>
            <h5>Created by: {bier.contributed_by.slice(0, bier.contributed_by.indexOf("<"))}</h5>
            <Link to={`/allebiere/${bier._id}`}><button className="detailsBtn">Details</button></Link>
        </div>
        

        </>
     );
}
 
export default BierCard;