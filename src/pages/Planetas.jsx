// Import necessary hooks and components from react-router-dom and other libraries.
import { Link, useParams } from "react-router-dom";  // To use link for navigation and useParams to get URL parameters
import PropTypes from "prop-types";  // To define prop types for this component
import rigoImageUrl from "../assets/img/rigo-baby.jpg"  // Import an image asset
import useGlobalReducer from "../hooks/useGlobalReducer";  // Import a custom hook for accessing the global state
import { useEffect, useState } from "react";
// Define and export the Single component which displays individual item details.
export const Planetas = props => {
  // Access the global state using the custom hook.
  const { store } = useGlobalReducer()
  const [planeta, setPlaneta] = useState ({});

  // Retrieve the 'theId' URL parameter using useParams hook.
  const { planetasId } = useParams()

    useEffect (()=>{
    fetch("https://www.swapi.tech/api/planets/"+ planetasId)
    .then((response)=>response.json())
    .then((data)=> setPlaneta (data.result.properties) )
   
    
    },[])
  

  return (
    <div className="container text-center mt-2">
      {/* <h1 className="display-4">film: {filmId}</h1> */}
      {/* <hr className="my-4" />  A horizontal rule for visual separation. */}

      <div className="card mb-3" style={{width:"70rem"}}>
        <div className="row g-0">
          <div className="col-md-4">
            <img src={rigoImageUrl} className="img-fluid rounded-start" alt="..."/>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h1>{planeta.name}</h1>
              <p className="card-text m-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet et iure libero dignissimos ipsa, mollitia nihil provident quibusdam unde nesciunt, alias expedita velit ad aliquid sed iusto rem? Voluptas, quod!</p>
            </div>
          </div>
        </div>
      </div>

      <p><strong>Name:</strong> {planeta.name}</p>
      <p><strong>Diameter:</strong> {planeta.diameter}</p>
      <p><strong>Terrain:</strong> {planeta.terrain}</p>

      {/* A Link component acts as an anchor tag but is used for client-side routing to prevent page reloads. */}
      <Link to="/">
        <span className="btn btn-primary btn-lg" href="#" role="button">
          Back home
        </span>
      </Link>
      

    </div>
  );
};

// Use PropTypes to validate the props passed to this component, ensuring reliable behavior.
Planetas.propTypes = {
  // Although 'match' prop is defined here, it is not used in the component.
  // Consider removing or using it as needed.
  match: PropTypes.object
};