import React from "react";

export const ItemStorage = ({ name, Add, Quit }) => {
  return (
    <div className="card mb-3">
      <div className="card-body">
        <div className="row">
          <h3 className="col-10">{name}</h3>
          <div className="col-2">
            <button
              onClick={() => Add(name)}
              className="btn btn-sm btn-primary"
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
