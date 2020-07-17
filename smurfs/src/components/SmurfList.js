import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchData, addSmurf } from "../actions/index";

const SmurfList = (props) => {
  const [newSmurfObj, setNewSmurfObj] = useState({
    name: "",
    age: "",
    height: ""
  });

  const handleChangesName = event => {
    setNewSmurfObj({
      name: event.target.value,
      age: newSmurfObj.age,
      height: newSmurfObj.height
    })
  }

  const handleChangesAge = event => {
    setNewSmurfObj({
      name: newSmurfObj.name,
      age: event.target.value,
      height: newSmurfObj.height
    })
  }

  const handleChangesHeight = event => {
    setNewSmurfObj({
      name: newSmurfObj.name,
      age: newSmurfObj.age,
      height: event.target.value
    })
  }

  useEffect(() => {
    props.fetchData();
  }, []);

  const handleSubmit = event => {
    event.preventDefault();
  }

  return (
    <div>
      {props.isLoading && <p>Loading CharacterList...</p>}
      {props.error && <p>Uh-oh, something happened... {props.error}</p>}
      {props.fetchedData.length > 0 && (
        <div>
          {props.fetchedData.map(data => (
              <div>
                <h1>{data.name}</h1>
                <h3>{data.age}</h3>
                <h3>{data.height}</h3>
              </div>
          ))}
          <h1>Input New Smurf</h1>
          <form onSubmit={handleSubmit}>
            <input type="text" name="name" value={newSmurfObj.name} onChange={handleChangesName} placeholder="Enter Name"/>
            <br /><input type="text" name="age" value={newSmurfObj.age} onChange={handleChangesAge} placeholder="Enter Age"/>
            <br /><input type="text" name="height" value={newSmurfObj.height} onChange={handleChangesHeight} placeholder="Enter Height"/>
            <br /><button onClick={() => props.addSmurf(newSmurfObj)}>Add Smurf</button>
          </form>
        </div>
      )}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    isLoading: state.isLoading,
    fetchedData: state.fetchedData,
    error: state.error
  };
};

export default connect(
    mapStateToProps,
    { fetchData, addSmurf }
  )(SmurfList);