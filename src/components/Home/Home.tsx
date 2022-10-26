import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from "styled-components"

const Home = () => {
  return (
      <Container>
          <Wrapper>
              <Up>
                  <Logo>
                      Logo
                  </Logo>
                  <Hold>
                  <NavLink to="/signUp" style={{textDecoration: "none", color: "white"}}>
                      <Buttons>SignIn</Buttons>
                      </NavLink>
                  </Hold>
              </Up>
              <Down>
                  <Left>
                      <Div>Notice the use of %PUBLIC_URL% in the tags above.
      It will be replaced with the URL of the `public` folder during the build.
      Only files inside the `public` folder can be referenced from the HTML.

      Unlike "/favicon.ico" or "favicon.ico", "%PUBLIC_URL%/favicon.ico" will
      work correctly both with client-side routing and a non-root public URL.
      Learn how to configure a non-root public URL by running `npm run build`.</Div>
                      <NavLink to="/signUp" style={{textDecoration: "none", color: "white"}}>
                      <Button>Get Started</Button>
                      </NavLink>
                  </Left>
                  <Right>
                    <Image src="/gradely_girl.png"/>
                  </Right>
              </Down>
          </Wrapper>
    </Container>
  )
}

export default Home

const Image = styled.img`
    position: absolute;
    bottom: 0px;
    right: 20px;
`
const Right = styled.div`
    flex: 0.5;
    /* background-color: gray; */
`
const Button = styled.button`
        border: 0px;
    outline: none;
    font-weight: 700;
    font-size: 16px;

    background-color: black;
    color: white;
    padding: 15px 35px;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 30px;
`
const Div = styled.div`
    color: white;
    font-weight: 500;
`
const Left = styled.div`
    flex: 1;
    /* background-color: gray; */

`
const Down = styled.div`
    width: 100%;
    height: 600px;
    display: flex;
    align-items: center;
`
const Buttons = styled.button`
    border: 0px;
    outline: none;
    font-weight: 700;
    font-size: 16px;

    background-color: black;
    color: white;
    padding: 10px 30px;
    border-radius: 5px;
    cursor: pointer;
`
const Hold = styled.div``
const Logo = styled.div`
    font-size: 25px;
    font-weight: 800;
    font-family: popins;
`
const Up = styled.div`
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px, rgba(0, 0, 0, 0.07) 0px 4px 4px;

    display: flex;
`
const Wrapper = styled.div`
    width: 95%;

`
const Container = styled.div`
    width: 100%;
    max-width: 1600px;
    height: 100%;
    min-height: 100vh;

    display: flex;
    /* align-items: center; */
    justify-content: center;

    background-color: #ff6200;
`