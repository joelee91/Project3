import React, { Component } from 'react';

class Posts extends Component {
    state = {
        input: '',
        submit: ''
    }

    handleChange = (event) => {
        const value = event.target.value
        const name = event.target.name
        this.setState({[name]: value})
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.setState({
            input: '',
            submit: this.state.input
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input value={this.state.input} onChange={this.handleChange}
                        name="input"/>
                    <button type='submit'>Post!</button>
                </form>
                <h1>{this.state.submit}</h1>
            </div>
        );
    }
}

export default Posts;