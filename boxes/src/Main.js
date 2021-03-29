import React from "react";

const Box = (props) => {
    return (
      <div className="box">
        <h2>Name: {props.name}</h2>
        <p>Age: {props.age}</p>
        <p>Title: {props.title}</p>
      </div>
    );
};

const Main = () => {
    return (
        <div>
            <Box name="First Guy" age="30" title="Boss"/>
            <Box name="First Gal" age="25" title="Manager"/>
            <Box name="Second Guy" age="20" title="Worker"/>
        </div>
    );
};

export default Main;