import { SET_CITY } from './../actions';


//un reducer para cada action. mas sencillo reducer mas facil es nuestro
//manejo del estado
//si el state viene null se puede 
export const city = (state = {}, action) => {
  switch (action.type) {
    case SET_CITY:
//spread operator se desglosa el estado inicial y si existe
//la prop city se modifica y sino se agrega al objeto inicial
    return { ...state, city: action.payload }
    default:
    return state;
  }
}