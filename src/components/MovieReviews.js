import React from 'react'

const movieReview = ({headline, byline, summary_short}) => (
    <li key={headline} className="review">
        <b>{headline}</b> - {byline}<br></br>
        {summary_short}
    </li>
)

const MovieReviews = props => (
    <ul className="review-list">
        {props.reviews.map(movieReview)}
    </ul>
)

export default MovieReviews