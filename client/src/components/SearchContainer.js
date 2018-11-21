import React, { Component } from 'react';
import Search from './Search'
import Results from './Results'
class SearchContainer extends Component {
    state = {
        query: '',
        hasSearched: false
    }

    onSubmitQuery = (e) => {
        e.preventDefault()
        this.setState({
            hasSearched: true
        })
    }

    onSearchInput = (e) => {
        this.setState({
            query: e.target.value
        })
    }
    render() {
        return (
            <div>
                {
                    this.state.hasSearched ?
                        <Results memes={this.props.memes} /> :
                        <Search
                            onSubmitQuery={this.onSubmitQuery}
                            onSearchInput={this.onSearchInput}
                        />
                }
            </div>
        );
    }
}

export default SearchContainer;