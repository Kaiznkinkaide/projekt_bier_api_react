import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import "./bierdetails.css"

const BierDetails = () => {

    const id = useParams()

    const [bier, setBier] = useState(true)

    let apiLink =`https://ih-beers-api2.herokuapp.com/beers/${id.id}`

    console.log(bier);


    useEffect(()=>{
        const apiFetch = async () => {
            const resp = await axios.get(apiLink)
            console.log(resp.data);
            setBier(resp.data)
        }
        apiFetch()
    }, [])



    return ( 
        <>
       <img src={bier.image_url} />
       <h1>{bier.name}</h1>
       <h2>{bier.tagline}</h2>
       <h5>first brewed: {bier.first_brewed}</h5>
       <h5>Attenuation level: {bier.attenuation_level}</h5>
       <p>{bier.description}</p>
       <Link to='/allebiere'><button>🔙</button></Link>
       
        </>
     );
}
 
export default BierDetails;