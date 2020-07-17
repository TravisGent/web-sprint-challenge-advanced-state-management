import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchData } from "../actions/index";

const SmurfList = (props) => {
  useEffect(() => {
    props.fetchData();
  }, []);
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
    { fetchData }
  )(SmurfList);