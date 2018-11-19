import React, { Component } from 'react';
import axios from 'axios'
import styled from 'styled-components'
import Posts from './Posts'

class UserProfile extends Component {
    state = {
        user: {},
        posts: []
    }

    componentDidMount() {
        this.getAllPosts()
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

    createNewPost = () => {
        const userId = this.props.match.params.userId
        const payload = {
            text: 'Make a new post!'
        }
        axios.post(`/api/users/${userId}/posts`, payload).then(res => {
            const newPost = res.data
            const newStatePosts = [...this.state.posts, newPost]
            this.setState({ posts: newStatePosts })
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.user.username}</h1>
            </div>
        );
    }
}

export default UserProfile;