import React, { Component } from 'react';
import axios from 'axios'
import styled from 'styled-components'
// import Image from 'react-image-resizer'

const ImgStyles = styled.div`
    
`

class UserProfile extends Component {
    state = {
        users: [],
        memes: []
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


    // getAllMemes = () => {
    //     axios.get('https://api.imgflip.com/get_memes')
    //     .then(res => res.data.data.memes.map(meme => (
    //         {
    //             name: `${meme.name}`
    //         }
    //     )))
    //     .then(newData => console.log(newData))
    // }

    componentDidMount() {
        this.getAllMemes()
    }
    render() {
        return (
            <div>
                {this.state.memes.map(meme => (
                    <div key={meme.id}>
                        {console.log('meme')}
                        {/* <Image>
                            <img src={meme.url} 
                            alt={meme.name}
                            height={50}
                            width={50} />
                        </Image> */}
                        <img src={meme.url}
                        alt={meme.name}
                        />
                        
                    </div>
                ))}
            </div>
        );
    }
}

export default UserProfile;