import { FETCH_DATA_START, FETCH_DATA_SUCCESS, ADD_SMURF } from "../actions/index";
import axios from "axios";

const initialState = {
  isLoading: false,
  fetchedData: [],
  error: ""
}

export const reducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_DATA_START:
      return {
        ...state,
        isLoading: true
      };
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        fetchedData: action.payload,
        error: ""
      }
    case ADD_SMURF:
      axios.post("http://localhost:3333/smurfs", {
        name: action.payload.name,
        age: action.payload.age,
        height: action.payload.height
      })
      return {
        ...state,
        isLoading: false,
        fetchedData: action.payload,
        error: ""
      }
    default:
      return state;
  }
}