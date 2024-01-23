import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";


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

       <div className="detailCardFrame">
           <img className="bierDetailImg" src={bier.image_url} />
           <h1>{bier.name}</h1>
           <h2>{bier.tagline}</h2>
           
         <section>
        <div>
            <h5>first brewed:</h5> 
            <h5>{bier.first_brewed}</h5>
        </div>
        <div>
            <h5>Attenuation level:</h5> 
            <h5> {bier.attenuation_level}</h5>
        </div>
         </section>
        
           <h3>{bier.description}</h3>
           <button className="backBtn"><Link to='/allebiere'>🔙</Link></button>
       </div>
       
        </>
     );
}
 
export default BierDetails;