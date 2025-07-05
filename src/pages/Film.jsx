// Import necessary hooks and components from react-router-dom and other libraries.
import { Link, useParams } from "react-router-dom";  // To use link for navigation and useParams to get URL parameters
import PropTypes from "prop-types";  // To define prop types for this component
import rigoImageUrl from "../assets/img/rigo-baby.jpg"  // Import an image asset
import useGlobalReducer from "../hooks/useGlobalReducer";  // Import a custom hook for accessing the global state
import { useEffect, useState } from "react";
// Define and export the Single component which displays individual item details.
export const Film = props => {
  // Access the global state using the custom hook.
  const { store } = useGlobalReducer()
  const [personaje, setPersonaje] = useState ({});

  // Retrieve the 'theId' URL parameter using useParams hook.
  const { filmId } = useParams()

    useEffect (()=>{
    fetch("https://www.swapi.tech/api/people/"+ filmId)
    .then((response)=>response.json())
    .then((data)=> setPersonaje (data.result.properties) )
   
    
    },[])
  

  return (
    <div className="container text-center">
      {/* Display the title of the todo element dynamically retrieved from the store using theId. */}
      <h1 className="display-4">film: {filmId}</h1>
      <hr className="my-4" />  {/* A horizontal rule for visual separation. */}
      <p>Name: {personaje.name}</p>
      <p>Gender: {personaje.gender}</p>
      <p>birth_year: {personaje.birth_year}</p>

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
Film.propTypes = {
  // Although 'match' prop is defined here, it is not used in the component.
  // Consider removing or using it as needed.
  match: PropTypes.object
};