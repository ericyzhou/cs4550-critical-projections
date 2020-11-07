const urlTitle = "http://www.omdbapi.com/?apikey=b41175d7&s="
const urlID = "http://www.omdbapi.com/?apikey=b41175d7&i="

const findMovieByTitle = (movieTitle) =>
    fetch(`${urlTitle}${movieTitle}`)
        .then(response => response.json())

const findMovieById = (movieId) =>
    fetch(`${urlID}${movieId}`)
        .then(response => response.json())

export default {
    findMovieByTitle,
    findMovieById
}