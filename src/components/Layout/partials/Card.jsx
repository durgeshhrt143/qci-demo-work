import React, { Fragment } from "react";
const Card = props => {
  console.log(props.data);
  return (
    <Fragment>
      {props.data.map((c, i) => (
        <div className="card" key={c + i}>
          <div className="card-body">
            <div className="card-text">
              <p>{c.id}</p>
              <p>{c.title}</p>
              <p>{c.genre.name}</p>
              <p>{c.numberInStock}</p>
              <p>{c.dailyRentalRate}</p>
              <p>{c.publiceDate}</p>
            </div>
          </div>
        </div>
      ))}
    </Fragment>
  );
};

export default Card;
