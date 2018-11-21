import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const NavBarStyles = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #457B9D;
  height: 50px;
  
  a {
    text-decoration: none;
    padding-left: 10px;
    color: white;
    &:active {
      color: red;
    }
  }
  .right {
    width: 15vw;
    display: flex;
    justify-content: space-around;
  }
`

class NavBar extends Component {
    render() {
        return (
            <div>
                <NavBarStyles>
                    <Link to="/">Home</Link>
                    <div className="right">
                        <Link to="/login">Log-In</Link>
                    </div>
                </NavBarStyles>
            </div>
        );
    }
}

export default NavBar;