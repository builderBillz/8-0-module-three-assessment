import React from 'react'
import './People.css'

class People extends React.Component {
        constructor() {
            super();
            this.state = {
                userInput: "",
                result: [],
                search:false,
                currentSearch:"",
                name:"",
                age:"",
                gender:"",
            }
        }


        handleSearch = () => {
            fetch(
                "https://ghibliapi.herokuapp.com/people/")
            .then((response) => {
                return response.json()})
            .then((people) => {

                const currentSearch =this.state.currentSearch 
                console.log(currentSearch)
                console.log(people)
                let match =people.filter((person)=> person.name.toLowerCase === currentSearch.toLowerCase)
                console.log(match)
                if(match.length > 0){
                 
                
                    this.setState({ search: true })
                    this.setState({ name: match[0].name })
                    this.setState({ age: match[0].age })
                    this.setState({ gender: match[0].gender })
                    }
            
            })
            .catch((err) => {
                console.log('error fetching data')
            })
        }
        
        handleSubmit = (event) => {
            event.preventDefault();
            this.setState({
                userInput: "",
            })
        }

        handleUserInput = (event) => {
            const { value } = event.target;
            this.setState({
                userInput: value,
            })
            this.setState({
                currentSearch: value,
            })
        }
    render() {
        const { userInput,search, name, age, gender } = this.state    
        if(search){
            return (
                <div className="people">
                    <h1>Search for a Person</h1>
                    <form onSubmit={this.handleSubmit} className="searchBox">
                        <input
                        className="searchInput"
                        type="text" 
                        placeholder="Search..."
                        value={userInput}
                        onChange={this.handleUserInput}
                        />
                        <button onClick={this.handleSearch} className="searchButton" type="submit">Search</button>
                    </form>
                    <section>
                        <p>Name:{name}</p>
                        <p>Age:{age}</p>
                        <p>Gender:{gender}</p>
                    </section>
                </div>
            )

        }
            return (
            <div className="people">
                <h1>Search for a Person</h1>
                <form onSubmit={this.handleSubmit} className="searchBox">
                    <input
                    className="searchInput"
                    type="text" 
                    placeholder="Search..."
                    value={userInput}
                    onChange={this.handleUserInput}
                    />
                    <button onClick={this.handleSearch} className="searchButton" type="submit">Search</button>
                </form>
            </div>
        )
    }
}

export default People