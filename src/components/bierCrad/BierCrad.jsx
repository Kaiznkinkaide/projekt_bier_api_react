import { Link, useParams } from "react-router-dom";
import BierDetails from "../bierdetails/BierDetails";

const BierCard = ({bier}) => {

    const id = useParams()




    return ( 
        <>
        <img src={bier.image_url} />
        <h2>{bier.name}</h2>
        <p>{bier.tagline}</p>
        <p>Created by: {bier.contributed_by.slice(0, bier.contributed_by.indexOf("<"))}</p>
        <Link to={`/allebiere/${bier._id}`}>Read More</Link>

        </>
     );
}
 
export default BierCard;