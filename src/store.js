export const initialStore=()=>{
  return{
    message: null,
    todos: [
      {
        id: 1,
        title: "Make the bed",
        background: null,
      },
      {
        id: 2,
        title: "Do my homework",
        background: null,
      }
    ],
    films: [],
    favorite: []
  }
}

export default function storeReducer(store, action = {}) {
  switch(action.type){
    case 'add_task':

      const { id,  color } = action.payload

      return {
        ...store,
        todos: store.todos.map((todo) => (todo.id === id ? { ...todo, background: color } : todo))
      };

      case 'new_Film':

      const { loadFilms } = action.payload

      return {
        ...store,
        films:loadFilms};

      case 'add_film':

      const { newText } = action.payload

      return {
        ...store,
        favorite: newText
      };

      case 'toggle_favorite':

      const { namePersonaje } = action.payload

      let agregarfavorite = []      
      if(store.favorite.includes(namePersonaje)){

        agregarfavorite = store.favorite.filter((film) =>film != namePersonaje)
      } 
      else{
        agregarfavorite = [...store.favorite,namePersonaje]
      }

      return {
        ...store,
        favorite: agregarfavorite
      };
      
    default:
      throw Error('Unknown action.');
  }    
}
