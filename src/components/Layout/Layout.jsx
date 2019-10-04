import React, { Fragment } from "react";
import Joi from "joi-browser";
import Form from "../common/Form";
import Table from "../Layout/partials/Table";
import Card from "../Layout/partials/Card";
import { getMovies } from "../../services/fakeMovieService";
import _ from "lodash";
class Layout extends Form {
  state = {
    movies: [],
    sort: [{ id: "table", name: "table" }, { id: "card", name: "card" }],
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
  // selectHandleComponent = component => {
  //   <component data={this.state.movies} />;
  // };
  componentDidMount() {
    this.setState({ movies: getMovies() });
  }
  render() {
    console.log(this.state.data.genreId);
    return (
      <div className="container">
        <h1 style={{ textAlign: "center" }}>Layout</h1>
        <form style={{ width: "200px", margin: "0 auto" }}>
          {this.renderSelect("genreId", "Table Heading", this.state.sort)}
        </form>

        {this.state.data.genreId === "table" && (
          <Table data={this.state.movies} />
        )}
        {this.state.data.genreId === "card" && (
          <Card data={this.state.movies} />
        )}
        {/* {this.selectHandleComponent(<Table />)} */}
      </div>
    );
  }
}

export default Layout;
