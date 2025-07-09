import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useState } from "react";

export const Navbar = () => {

	const {store, dispatch} =useGlobalReducer()

	function handleRemoveFavorite (indexToDelete) {
		dispatch({
			type: "delete_favorite",
			payload: {indexDelete:indexToDelete},
		});
	};
	

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">React Boilerplate</span>
				</Link>
				<div className="ml-auto">
				
						<div className="btn-group">
						<button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false">
							Favorites
						</button>
						<ul className="dropdown-menu dropdown-menu-lg-end">
							<div className="ms-2">{store.favorite.map((favorite,index)=>
								 <p key={index}>{favorite}
								 <button onClick={() => handleRemoveFavorite(index)} className="float-end me-2">X</button>
								 </p>)}
					
							</div>
						</ul>
						</div>
				</div>
			</div>
		</nav>
	);
};