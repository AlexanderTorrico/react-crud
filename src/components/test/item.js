import React from "react";

export const Item = ({ name, Add, i, Quit }) => {
  return (
    <div className="card mb-3">
      <div className="card-body">
        <div className="row">
          <h3 className="col-10">{name}</h3>
          <div className="col-2">
            <button
              onClick={() => Quit(i)}
              className="btn btn-sm btn-secondary ms-2"
            >
              -
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
