import React, { Component } from 'react';
import axios from 'axios'
import styled from 'styled-components'
import Search from './Search'
import Results from './Results'

const ImgStyles = styled.div`  
img{

    display: flex;
    flex-direction: row;
    width: 350px;
    height: 350px;
    background: #f1faee;
    margin: 10px 0;
}
    `

class UserProfile extends Component {
    state = {
        users: [],
        memes: [],
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

    getAllMemes = () => {
        axios.get('https://api.imgflip.com/get_memes').then(res => {
            console.log(res)
            console.log(res.data.data.memes)
            this.setState(
                {
                    memes: res.data.data.memes
                }
            )
        })
    }

    componentDidMount() {
        this.getAllMemes()
    }

    
    render() {
        return (
            <div>
                {
                    this.state.hasSearched ?
                        <Results memes={this.state.memes} /> :
                        <Search
                            onSubmitQuery={this.onSubmitQuery}
                            onSearchInput={this.onSearchInput}
                        />
                }
            </div>
        );
    }
}

export default UserProfile;