import axios from "axios";

export const FETCH_DATA_START = "FETCH_DATA_START";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const ADD_SMURF = "ADD_SMURF";

export const fetchData = () => {
  return dispatch => {
    dispatch({ type: FETCH_DATA_START });

    axios.get("http://localhost:3333/smurfs")
      .then(response => {
        dispatch({ type: FETCH_DATA_SUCCESS, payload: response.data})
      }) 
      .catch(error => console.log(error))
  };
};

export const addSmurf = data => {
  return dispatch => {
    dispatch({ type: ADD_SMURF, payload: data})
  }
}