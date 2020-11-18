import React from 'react'
import imdbSearchService from '../services/IMDBSearchService'
import {Link} from "react-router-dom";

class IMDBSearchListComponent extends React.Component {

    state = {
        searchTerm: "",
        results: {}
    }

    updateSearchTerm = (searchTerm) => {
        this.setState(prevState => ({
            ...this.state,
            searchTerm
        }))
    }

    searchMovie = (movieTitle) => {
        imdbSearchService.findMoviesByTitle(movieTitle)
            .then(results => this.setState(prevState => ({
                ...this.state,
                results
            })))
    }

    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }

    render() {
        return(
            <div className={"container"}>
                <h1>Search</h1>
                <input className={"form-control"}
                       placeholder={"Movie name"}
                       onChange={(event) => this.updateSearchTerm(event.target.value)}/>
                <button
                    className={"btn btn-primary"}
                    onClick={() => this.searchMovie(this.state.searchTerm)}>
                    Search
                </button>
                {
                    this.state.results.Search &&
                    <table className={"table"}>
                        <thead>
                        <tr>
                            <th scope={"col"}>Title</th>
                            <th scope={"col"}>Year Released</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.results.Search.map(result =>
                                <tr>
                                    <td><Link to={`/search/movies/${result.imdbID}`}>{result.Title}</Link></td>
                                    <td>{result.Year}</td>
                                </tr>
                            )
                        }
                        </tbody>
                    </table>
                }
                {
                    !this.state.results.Search &&
                    <h3>
                        No movies found
                    </h3>
                }

            </div>
        )
    }
}

export default IMDBSearchListComponent
