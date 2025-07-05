import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const Navbar = () => {

	const {store, dispatch} =useGlobalReducer()

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">React Boilerplate</span>
				</Link>
				<div className="ml-auto">
					{/* <Link to="/demo">
						<button className="btn btn-primary">Check the Context in action</button>
					</Link> */}
						<div className="btn-group">
						<button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false">
							favorites
						</button>
						<ul className="dropdown-menu dropdown-menu-lg-end">
							<div className="ms-3">{store.favorite.map((film,index)=>
								 <p key={index}>{film} <button className="float-end me-3">X</button></p>)}
					
							</div>
						</ul>
						</div>
				</div>
			</div>
		</nav>
	);
};