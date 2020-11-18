const urlTitle = "http://www.omdbapi.com/?apikey=b41175d7&type=movie&s="
const urlID = "http://www.omdbapi.com/?apikey=b41175d7&plot=full&i="

const findMoviesByTitle = (movieTitle) =>
    fetch(`${urlTitle}${movieTitle}`)
        .then(response => response.json())

const findMovieById = (movieId) =>
    fetch(`${urlID}${movieId}`)
        .then(response => response.json())

export default {
    findMoviesByTitle,
    findMovieById
}
