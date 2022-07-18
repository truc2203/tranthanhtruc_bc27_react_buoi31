import React from "react";

const Model = ({info}) => {
  return (
    <>
      <div className="col-3 position-relative">
        <img className="model" src="glassesImage/model.jpg" alt="" />
         <img
          className="position-absolute model-glass"
          src={info.url}
          alt=""
          width="160px"
          height="50px"
        /> 
        <div className="position-absolute glass-info">
          <h5>{info.name}</h5>
          <p>{info.desc}</p>
        </div>
      </div>
      <div className="col-3 position-relative">
        <img className="model" src="glassesImage/model.jpg" alt="" />
         <img
          className="position-absolute model-glass"
          src={info.url}
          alt=""
          width="160px"
          height="50px"
        />
        <div className="position-absolute glass-info">
          <h5>{info.name}</h5>
          <p>{info.desc}</p>
        </div> 
      </div>
    </>
  );
};

export default Model;
