import React from 'react';
import imdbSearchService from "../services/IMDBSearchService";

class IMDBSearchItemComponent extends React.Component {

    state = {
        movie: {}
    }

    componentDidMount() {
        const movieId = this.props.match.params.movieId

        imdbSearchService.findMovieById(movieId)
            .then(info => this.setState(prevState => ({
                movie: info
            })))
    }

    render() {
        return(
            <div className={"container"}>
                <h1>{`${this.state.movie.Title} (${this.state.movie.Year})`}</h1>
                <h6>{this.state.movie.Rated}</h6>
                <h6>{this.state.movie.Runtime}</h6>
                <h6>{this.state.movie.Released}</h6>
                <img src={this.state.movie.Poster}/>
            </div>
        )
    }
}


export default IMDBSearchItemComponent