import React from 'react';
import imdbSearchService from "../services/IMDBSearchService";
import {Link} from "react-router-dom";

class MovieComponent extends React.Component {

    state = {
        movie: {},
        ratings: []
    }

    componentDidMount() {
        const movieId = this.props.match.params.movieId

        imdbSearchService.findMovieById(movieId)
            .then(info => this.setState(prevState => ({
                movie: info,
                ratings: info.Ratings
            })))
    }

    render() {
        return(
            <div className={"container"}>
                <div className="jumbotron bg-dark text-white">
                    <div className="container">
                        <h1 className="display-4">{`${this.state.movie.Title} (${this.state.movie.Year})`}</h1>
                        <hr className="my-4 bg-white"/>
                        <p className="lead">{this.state.movie.Rated}  |  {this.state.movie.Runtime}  |  {this.state.movie.Genre}  |  {this.state.movie.Released}</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-4">
                        <img src={this.state.movie.Poster}/>
                    </div>
                    <div className="col">
                        <div className="jumbotron bg-dark text-white align-middle">
                            <div className="container">
                                <h1>Plot</h1>
                                <hr className="my-4 bg-white"/>
                                <p className="custom-control-inline">{this.state.movie.Plot}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <h4>Director: {this.state.movie.Director}</h4>
                    <h4>Writer: {this.state.movie.Writer}</h4>
                    <h4>Lead Actors: {this.state.movie.Actors}</h4>
                </div>
                <div className="container">
                    <h1>Scores</h1>
                    <ul className="list-group">
                    {
                        this.state.ratings.map(rating =>
                            <li key={rating.Source} className="list-group-item">
                                <h3>{rating.Source}:    {rating.Value}</h3>
                            </li>
                        )
                    }
                    <li key='us' className="list-group-item">
                        <h3>Our Score:    6.5/10</h3>
                    </li>
                    </ul>
                </div>
                <div className="container">
                    <h1>Top Reviews</h1>
                    <ul className="list-unstyled">
                        <li className="media">
                            <img src="https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png"
                                 className="align-self-center mr-3" alt="..." height="80" width="80"/>
                                <div className="media-body">
                                    <h3 className="mt-0 mb-1">1.6</h3>
                                    <h5 className="mt-0 mb-1">Meh... The Boat Sinks</h5>
                                    What the title says... pretty boring until that part. Some kind
                                    of love story or something? Idk, I fell asleep.
                                </div>
                        </li>
                        <li className="media my-4">
                            <img src="https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png"
                                 className="align-self-center mr-3" alt="..." height="80" width="80"/>
                                <div className="media-body">
                                    <h3 className="mt-0 mb-1">9.8</h3>
                                    <h5 className="mt-0 mb-1">Made Me Feel Emotion Again</h5>
                                    When I say that this movie changed my life, I mean it!  I never thought
                                    that I would cry at the theater but it was like there were thousands of
                                    ninjas cutting onions.  So moving and touching.  A must watch for any
                                    fans of boat romance!
                                </div>
                        </li>
                        <li className="media">
                            <img src="https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png"
                                 className="align-self-center mr-3" alt="..." height="80" width="80"/>
                                <div className="media-body">
                                    <h3 className="mt-0 mb-1">5.6</h3>
                                    <h5 className="mt-0 mb-1">SCARY!!!</h5>
                                    Never going on a cruise again!  They have this listed as a romance/drama.
                                    I mean it when I say that this was some of the scariest $#*% that I have ever seen.
                                    Legitimately caused me Thalassophobia.  I hate you James Cameron!
                                </div>
                        </li>
                    </ul>
                    <Link to={`/search/movies/${this.state.movie.imdbID}/reviews`}>See more</Link>
                </div>
            </div>
        )
    }
}


export default MovieComponent
