import React, { Fragment } from "react";
import Joi from "joi-browser";
import Form from "../common/Form";
import { getMovies } from "../../services/fakeMovieService";
import { getGenres, getGenre } from "../../services/fakeGenresService";
class Filterning extends Form {
  state = {
    movies: [],
    genres: [],
    selectedGenre: "",
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
    this.setState({ movies: getMovies(), genres: getGenres() });
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.data.genreId !== this.state.data.genreId) {
      this.setState({
        selectedGenre: getGenre(parseInt(this.state.data.genreId))
      });
    }
  }
  render() {
    const filtered = this.state.selectedGenre
      ? this.state.movies.filter(
          m => m.genre.id === this.state.selectedGenre[0].id
        )
      : this.state.movies;
    console.log(this.state.selectedGenre);
    console.log(filtered);

    return (
      <div className="container">
        <h1 style={{ textAlign: "center" }}>Filtering</h1>
        <form style={{ width: "200px", float: "right" }}>
          {this.renderSelect("genreId", "Genre", this.state.genres)}
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
            {filtered.map((c, i) => (
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

export default Filterning;
