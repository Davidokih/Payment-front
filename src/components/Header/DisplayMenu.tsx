import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'


const DisplayMenu = () => {
  return (
      <Container>
          <Wrapper>
              <Head>
                  <Image />
                  <Personal>
                      <Name>David Okih</Name>
                      <Title>Run `npm audit`</Title>
                  </Personal>
              </Head>
              <NavHold>
                  <Nav to="/">Home</Nav>
                  <Nav to="/history">History</Nav>
                  <Nav to="/verified">verified</Nav>
                  <Nav to="/accountDetail">Account</Nav>
                  <Nav to="/signUp">Log Out</Nav>
                  <Nav to="/forgetPass">ForgetPass</Nav>
              </NavHold>
          </Wrapper>
    </Container>
  )
}

export default DisplayMenu

const Nav = styled(NavLink)`
    line-height: 3.5;
    font-weight: 600;
    padding-left: 20px;
    width: 227px;
    display: flex;
    text-decoration: none;
    color: black;
    box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px, rgba(0, 0, 0, 0.07) 0px 4px 4px;
    /* justify-content: center; */
    cursor: pointer;

    :active{
        border-left: 5px solid blue;
        background-color: #0000005d;
    }
    :focus{
        border-left: 3px solid blue;
        background-color: #0000005d;
    }
`
const NavHold = styled.div`
    margin-top: 20px;
    border-top: 1px solid black;
`
const Title = styled.div`
    font-size: 12px;
    font-weight: 700;
`
const Name = styled.div`
    font-weight: 700;
    font-size: 20px;
    /* font-family: Darlin in paris; */
`
const Personal = styled.div`
    margin-left: 20px;
`
const Image = styled.div`
    width: 50px;
    height: 50px;

    border-radius: 50%;
    background-color: gold;
`
const Head = styled.div`
    display: flex;

    width: 90%;
    align-items: center;
    /* background-color: blue; */
    justify-content: center;
`
const Wrapper = styled.div`
    /* width: 90%; */
`
const Container = styled.div`
    width: 100%;

    display: flex;
    /* justify-content: center; */
    margin-top: 20px;
    /* background-color: pink; */
`


