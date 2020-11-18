import React from 'react'
import imdbSearchService from '../services/IMDBSearchService'
import {Link} from "react-router-dom";
import '../styles/IMDBSearchListStyle.css'

class IMDBSearchListComponent extends React.Component {

    state = {
        searched: false,
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
                searched: true,
                results
            })))
    }

    handleKeyPress = (target) => {
        if(target.charCode===13) {
            this.searchMovie(this.state.searchTerm)
        }
    }

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.setState(prevState => ({
            ...this.state,
            searched: false
        }))
    }

    render() {
        return(
            <div className={"container"}>
                <h1>Search</h1>
                <div className={"input-group"}>
                    <input type={"text"}
                           className={"form-control"}
                           placeholder={"Movie name"}
                           onChange={(event) => this.updateSearchTerm(event.target.value)}
                           onKeyPress={this.handleKeyPress}/>
                    <div className={"input-group-append"}>
                        <button type={"button"}
                                className={"btn btn-primary"}
                                onClick={() => this.searchMovie(this.state.searchTerm)}>
                            Search
                        </button>
                    </div>
                </div>
                <div>
                    {
                        this.state.searched &&
                        <div>
                            {
                                this.state.results.Search &&
                                <div>
                                    <h6>{this.state.results.Search.length} results found</h6>
                                    <table className={"table"}>
                                        <thead>
                                        <tr>
                                            <th scope={"col"}></th>
                                            <th scope={"col"}>Title</th>
                                            <th scope={"col"}>Year Released</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {
                                            this.state.results.Search.map(result =>
                                                <tr>
                                                    <td>
                                                        <img className={"result-image"} src={`${result.Poster}`}/>
                                                    </td>
                                                    <td>
                                                        <Link to={`/search/movies/${result.imdbID}`}>
                                                            {result.Title}
                                                        </Link>
                                                    </td>
                                                    <td>{result.Year}</td>
                                                </tr>
                                            )
                                        }
                                        </tbody>
                                    </table>
                                </div>
                            }
                            {
                                !this.state.results.Search &&
                                <h3>
                                    No results
                                </h3>
                            }
                        </div>
                    }
                    {
                        !this.state.searched &&
                        <div></div>
                    }
                </div>
            </div>
        )
    }
}

export default IMDBSearchListComponent
