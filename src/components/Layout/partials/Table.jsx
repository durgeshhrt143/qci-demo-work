import React from "react";
const Table = props => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>id</th>
          <th>title</th>
          <th>genre</th>
          <th>numberInStock</th>
          <th>dailyRentalRate</th>
          <th>publiceDate</th>
        </tr>
      </thead>

      <tbody>
        {props.data.map((c, i) => (
          <tr key={i + c.publiceDate}>
            <td>{c.id}</td>
            <td>{c.title}</td>
            <td>{c.genre.name}</td>
            <td>{c.numberInStock}</td>
            <td>{c.dailyRentalRate}</td>
            <td>{c.publiceDate}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
