import React, { Component } from 'react'
import moment from 'moment'

export class Movie extends Component {
  render() {
    const { title, releaseDate, score, overview, poster, favorite } = this.props
    const posterLink = `https://image.tmdb.org/t/p/w185${poster}`

    return (
      <li>
        <img src={posterLink} />
        <div className="movie-description">
          <h3>
            {title}
            <span>
              <button
                className="favorite-button-container"
                onClick={this.props.toggleLike}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="17"
                  viewBox="0 0 24 24"
                  style={{
                    fill:
                      favorite === true ? 'hsla(0, 100%, 67%, 1)' : '#a3a3a3',
                  }}
                >
                  <path d="M12 4.435c-1.989-5.399-12-4.597-12 3.568 0 4.068 3.06 9.481 12 14.997 8.94-5.516 12-10.929 12-14.997 0-8.118-10-8.999-12-3.568z" />
                </svg>
              </button>
            </span>
          </h3>

          <p>Release Date: {moment(releaseDate).format('MMMM Do, YYYY')}</p>
          <p>Score: {score}</p>
          <hr />
          <p>{overview}</p>
        </div>
      </li>
    )
  }
}
