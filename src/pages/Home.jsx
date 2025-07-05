import { useEffect, useState } from "react";
import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import { Card } from "../components/Card.jsx";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const Home = () => {

  const {store, dispatch} =useGlobalReducer()

  const [films, setfilms] = useState ([])

  useEffect (()=>{
	fetch("https://www.swapi.tech/api/people")
	.then((response)=>response.json())
	.then((data)=> { setfilms (data.results)
	dispatch({
		type:"new_Film",
		payload:{loadFilms: data.results}
	})
	})
	},[])

  return (
	<div>

	  <h1 className="m-2">Personajes</h1>
	  <div className="row flex-row flex-nowrap overflow-auto m-0">
		{store.films.map((films)=> <Card key={films.uid} uid={films.uid} name={films.name}/> )}
	  </div>
	  <h1 className="m-2">Planetas</h1>
	  <div className="row flex-row flex-nowrap overflow-auto">
		{store.films.map((films)=> <Card key={films.uid} uid={films.uid} name={films.name}/> )}
	  </div>

	</div>
	);
}; 