import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'XGjLG9NRWKiyOrq3IAUlPMY0B50WTuJW'
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}&query=`

class SearchableMovieReviewsContainer extends Component {
    state = {
        reviews: [],
        searchTerm: ""
    }

    handleChange = event => this.setState({searchTerm: event.target.value})

    handleSubmit = event => {
        event.preventDefault()
        
        this.setState({searchTerm: ""})

        fetch(URL + this.state.searchTerm)
        .then(resp => resp.json())
        .then(movieData => {
            this.setState({reviews: movieData.results})
        })
    }

    render() {
        return (
            <div className="searchable-movie-reviews">
                <form onSubmit={this.handleSubmit}>
                    <input type="text" onChange={this.handleChange} value={this.state.searchTerm} />
                    <input type="submit" />
                </form>
                <h2>Reviews Found</h2>
                <MovieReviews reviews={this.state.reviews }/>
            </div>
        )
    }
}

export default SearchableMovieReviewsContainer