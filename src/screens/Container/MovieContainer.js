import React, { Component } from "react";
import MovieLayout from "../Components/MovieLayout";
import ListMovies from "../Components/LisMovies";
import MovieService from "../../services/MovieServices";

export default class MovieContainer extends Component {
  state = {
    data: [],
  };

  componentDidMount = () => {
    this.getAllMovies();
  };

  getAllMovies = () => {
    MovieService.getAll()
      .then((movies) =>
        this.setState({
          data: movies,
        })
      )
      .catch((err) => console.log("ocurrio un error ", err));
  };

  render() {
    return (
      <MovieLayout>
        <div className="border-2 padd border-black p-1">
        <h1 className="text-5xl"> Listado de peliculas </h1>
        </div>

        <ListMovies data={this.state.data} />
      </MovieLayout>
    );
  }
}
