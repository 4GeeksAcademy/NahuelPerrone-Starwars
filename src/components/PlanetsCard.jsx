import PropTypes from "prop-types";
import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const PlanetsCard = (props) => { 

    const {store, dispatch} =useGlobalReducer()
    return (

        <div className="card m-1" style={{width: "18rem"}}>
            <img src={rigoImageUrl} className="card-img-top" alt="..."/>
            <div className="card-body ">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text"></p>
                <div className="d-flex justify-content-between">
                <Link to={"planetas/" + props.uid} className="btn btn-primary">Lear More</Link>
                <button onClick={()=>(
                    dispatch({
                        type:"toggle_favorite",
                        payload:{namePersonaje:props.name}
                    })
                )}>like</button>
                </div>
            </div>
        </div>
    );
};