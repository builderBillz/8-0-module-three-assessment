import React from 'react'
import films from '../../data/films';
import './Movies.css'

class Movies extends React.Component {
    constructor() {
        super();
        this.state = {
            value: "",
            films:films ,
            search:false,
            selected:""
        }
    }
    handleChange = () => {
        fetch(
            `https://ghibliapi.herokuapp.com/films`)
        .then((response) => {
            return response.json()})
        .then((films) => {
            console.log(films[0].title)        
            this.setState({ value: films[0].title })
            // this.setState({ search: true })
        })
        .catch((err) => {
            console.log('error fetching data')
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        // this.setState({
        //     userInput: "",
        // })
    }

    render() {
        let films = this.state.films
        // const options = films.map((film) => <option value={film.title}>{film.title}</option>)
        
        return (
            <div className="movies">
                <h1>Select a Movie</h1>
                <form onSubmit={this.handleSubmit}>
                     <label>
                    <select value={this.state.value} onChange={this.handleChange}>            
                        <option value={this.state.value}>{this.state.value}</option>
                    </select>
                    </label>
                    <input type="submit" value="Submit" />
      </form>
            </div>
        )
    }
}

export default Movies