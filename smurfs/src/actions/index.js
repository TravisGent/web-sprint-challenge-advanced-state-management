import axios from "axios";

export const FETCH_DATA_START = "FETCH_DATA_START";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";

export const fetchData = () => {
  return dispatch => {
    dispatch({ type: FETCH_DATA_START });

    axios.get("http://localhost:3333/smurfs")
      .then(response => {
        dispatch({ type: FETCH_DATA_SUCCESS, payload: response.data})
      }) 
      .catch(error => console.log(error))
    
    axios.post("http://localhost:3333/smurfs", {
      name: "NewSmurf",
      age: 225,
      height: "4.5cm"
    })
    .then(response => {
      dispatch({ type: FETCH_DATA_SUCCESS, payload: response.data})
    })
    .catch(error => console.log(error))
  };
};