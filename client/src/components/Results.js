import React, { Component } from 'react'
import styled from 'styled-components'


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
    const NewMemeButton = styled.button`
  background: #1d3557;
  color: white;
  font-size: 1.3rem;
  padding: 7.5px 5px;
`

class Results extends Component {

    render() {
        let results = this.props.memes.map(meme => {
            return (
                <div key={meme.id}>
                    <ImgStyles>
                        <img src={meme.url}
                        alt={meme.name} />
                    </ImgStyles>
                    <NewMemeButton onClick={this.handleCreateNewMeme}>
                        Generate Meme
                    </NewMemeButton>
                </div>
            )
        })

        return (
            <div>
                {results}
            </div>
        )
    }
}


export default Results