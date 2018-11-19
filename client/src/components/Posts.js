import React, { Component } from 'react';
import axios from 'axios'
import styled from 'styled-components'
import Post from './Post'

class Posts extends Component {
    state = {
        user: {},
        posts: []
    }

    componentWillMount() {
        const 
    }

    getAllPosts = () => {
        const userId = this.props.match.params.userId
        axios.get(`/api/users/${userId}`).then(res => {
            this.setState({
                user: res.data,
                posts: res.data.posts
            })
        })
    }

    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default Posts;