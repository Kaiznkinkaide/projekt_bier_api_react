import { useEffect, useState } from "react";
import Nav from "../../components/nav/Nav";
import axios from "axios"
import BierCard from "../../components/bierCrad/BierCrad";

const AlleBiere = () => {

    const [biere, setBiere] = useState([])

    const api ="https://ih-beers-api2.herokuapp.com/beers"


    useEffect(()=>{
const fetchApi = async () =>{
    const resp = await axios.get(api)
    setBiere(resp.data)
}
fetchApi()

    }, [])
    console.log(biere);



    return ( 
        <>
        
        {biere.map((bier, index) => {
            return (
            <div className="allebiere" key={index}>
                <BierCard
                bier={bier}/>
            </div>
            )
        })}
        </>
     );
}
 
export default AlleBiere;