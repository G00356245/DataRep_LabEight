import React from 'react';
import { Movies } from './movies';
import axios from 'axios';//imported axios 

//Read class
export class Read extends React.Component {

    //this constructor will bind to the reloaddata method.
    constructor(){
        super();

        this.ReloadData = this.ReloadData.bind(this);
    }

    //method to call list of movies.
    state = {
        movies: []

    };

    //using a life cyclehook, this method will get called everytime our componeent is mounted.
    componentDidMount() {
        axios.get('http://localhost:4000/api/movies')   //calling the list of movies from server localhost:4000.
            .then((response) => {
                this.setState({ movies: response.data })
            })    //this will use the fufill state.
            .catch(
                (error) => {
                    console.log(error)
                });  //if the .then function doesn't work then this line will run.
    }

    ReloadData() {
        axios.get('http://localhost:4000/api/movies')   //calling the list of movies from server localhost:4000.
            .then((response) => {
                this.setState({ movies: response.data })
            })    //this will use the fufill state.
            .catch(
                (error) => {
                    console.log(error)
                });  //if the .then function doesn't work then this line will run.
    }

    render() {
        return (
            <div>
                <h1>This is my Read component.</h1>
                {/* movies will display under the h1 tag.
                Passing down the reloaddata method component */}
                <Movies movies={this.state.movies} ReloadData={this.ReloadData}></Movies>
            </div>
        );
    }
}