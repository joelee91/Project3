import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'

class LogInPage extends Component {
    state = {
        users: [],
        newUser: {
            username: '',
            password: '',
            age: '',
            ethnicity: '',
            hobbies: '',
            interests: ''
        }
    }

    handleChange = (event) => {
        console.log('name', event.target.name)
        console.log('value', event.target.value)
        const updatedNewUser = {...this.state.newUser}
    
        updatedNewUser[event.target.name] = event.target.value
        this.setState({newUser: updatedNewUser})
      }

      handleSubmit = (event) => {
        event.preventDefault()
        axios.post('/api/users', this.state.newUser).then(res => {
          console.log(res.data)
          this.props.history.push(`/`)
        })
      }

      

    render() {
        return (
            <div>
                <h3>Sign-Up</h3>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="username">User Name: </label>
                        <input onChange={this.handleChange} value={this.state.newUser.username} type="text" name="username"/>
                    </div>
                    <div>
                        <label htmlFor="password">Password: </label>
                        <input onChange={this.handleChange} value={this.state.newUser.password} type="text" name="password"/>
                    </div>
                    <div>
                        <label htmlFor="age">Age: </label>
                        <input onChange={this.handleChange} value={this.state.newUser.age} type="text" name="age"/>
                    </div>
                    <div>
                        <label htmlFor="ethnicity">Ethnicity: </label>
                        <input onChange={this.handleChange} value={this.state.newUser.ethnicity} type="text" name="ethnicity"/>
                    </div>
                    <div>
                        <label htmlFor="hobbies">Hobbies: </label>
                        <textarea onChange={this.handleChange} value={this.state.newUser.hobbies} type="text" name="hobbies"/>
                    </div>
                    <div>
                        <label htmlFor="interests">Interests: </label>
                        <textarea onChange={this.handleChange} value={this.state.newUser.interests} type="text" name="interests"/>
                    </div>
                    <button type="Submit">Get Roasted</button>
                </form>
            </div>
        );
    }
}

export default LogInPage;