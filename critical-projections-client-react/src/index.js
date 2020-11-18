import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import IMDBSearchListComponent from "./components/IMDBSearchListComponent";
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/font-awesome/css/font-awesome.css'
import {BrowserRouter, Route, Link} from "react-router-dom";
import MovieComponent from "./components/MovieComponent";
import ReviewsComponent from './components/ReviewsComponent'

ReactDOM.render(
    <BrowserRouter>
        <div>
            <Link to={"/search/movies"}>Search Movies</Link>
            <Route path={'/search/movies'} exact component={IMDBSearchListComponent}/>
            <Route path={'/search/movies/:movieId'} exact component={MovieComponent}/>
            <Route path={'/search/movies/:movieId/reviews'} exact component={ReviewsComponent}/>
        </div>
    </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
