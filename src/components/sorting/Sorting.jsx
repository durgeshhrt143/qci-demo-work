import React, { Fragment } from "react";
import Joi from "joi-browser";
import Form from "../common/Form";
import { getMovies } from "../../services/fakeMovieService";
import _ from "lodash";
class Sorting extends Form {
  state = {
    movies: [],
    sortColumn: { path: "title", order: "asc" },
    sort: [
      { id: "id", name: "id" },
      { id: "title", name: "title" },
      { id: "genre.name", name: "genre" },
      { id: "numberInStock", name: "numberInStock" },
      { id: "dailyRentalRate", name: "dailyRentalRate" },
      { id: "publiceDate", name: "publiceDate" }
    ],
    data: {
      genreId: ""
    },
    errors: {}
  };
  schema = {
    genreId: Joi.number()
      .required()
      .label("Genre")
  };

  componentDidMount() {
    this.setState({ movies: getMovies() });
  }
  handleSort = path => {
    this.setState({ sortColumn: { path: path, order: "asc" } });
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevState.data.genreId !== this.state.data.genreId) {
      this.handleSort(this.state.data.genreId);
    }
  }
  render() {
    const { sortColumn } = this.state;
    const sorted = _.orderBy(
      this.state.movies,
      [sortColumn.path],
      [sortColumn.order]
    );
    console.log(this.state.data.genreId);
    console.log(this.state.sortColumn);
    return (
      <div className="container">
        <h1 style={{ textAlign: "center" }}>Sorting</h1>
        <form style={{ width: "200px", float: "right" }}>
          {this.renderSelect("genreId", "Table Heading", this.state.sort)}
        </form>
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
            {sorted.map((c, i) => (
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
      </div>
    );
  }
}

export default Sorting;
