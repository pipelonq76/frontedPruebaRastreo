import API from "./config";

const MOVIES_ENPOINTS = {
    LIST_MOVIES : "list_movies.json",
    MOVIE_DETAIL : "movie_detatails.json?movie_id="
}

const MovieService = {
    getAll: () => new Promise(
        (resolve, reject) => {
            API.get(MOVIES_ENPOINTS.LIST_MOVIES)
            .then(
                res => res.data.data.movies
            )

            .then(
                data => resolve(data)
            )
            .catch (
                err => reject(err)
            )
        }
    ),

    get:(id) => new Promise (
        (resolve,reject) => {
            API.get(MOVIES_ENPOINTS.MOVIE_DETAIL+id)
            .then(
                res => res.data.data.movie
            )
            .then(
                data => resolve(data)
            )
            .catch(
                err => reject(err)
            )
        }
    ),
}

export default MovieService;