import React, { Component } from 'react'
import { Movie } from './components/Movie'

class App extends Component {
  state = {
    movies: [],
    filterText: '',
    favorite: true,
  }

  // toggleLike = () => {
  //   this.setState({ favorite: false })
  //   if (this.state.favorite === true) {
  //     this.setState({ favorite: false })
  //   } else {
  //     this.setState({ favorite: true })
  //   }
  // }

  async componentDidMount() {
    const response = await fetch(
      'https://api.themoviedb.org/3/discover/movie?primary_release_year=1989&sort_by=popularity.desc&api_key=7e2685df1a8cab2651c77b66f445de9f'
    )
    const moviesFromApi = await response.json()
    this.setState({ movies: moviesFromApi.results })
  }

  handleFilterTextChange = event => {
    const value = event.target.value
    this.setState({ filterText: value })
  }

  render() {
    const { movies, filterText, favorite } = this.state
    const filteredMoviesToRender = movies.filter(movie =>
      movie.title.includes(filterText)
    )

    const sortedMovies = filteredMoviesToRender.sort((movie1, movie2) =>
      movie2.release_date.localeCompare(movie1.release_date)
    )

    const moviesToRender = filteredMoviesToRender.map(movie => (
      <Movie
        key={movie.id}
        title={movie.title}
        releaseDate={movie.release_date}
        score={movie.vote_average}
        overview={movie.overview}
        poster={movie.poster_path}
        favorite={favorite}
        // toggleLike={this.toggleLike()}
      />
    ))

    return (
      <div>
        <header className="crt">
          <h1>Best Movies in the 80s</h1>
        </header>
        <main>
          <input
            type="text"
            placeholder="Search for movie..."
            value={filterText}
            onChange={this.handleFilterTextChange}
          />

          <ul>{moviesToRender}</ul>
        </main>
      </div>
    )
  }
}

export default App
