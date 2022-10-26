import React, { useEffect, useRef } from 'react'
import styled from "styled-components"
import DisplayMenu from './DisplayMenu'
import { NavLink } from 'react-router-dom'
import "./style.css"

const Header = () => {
    // useEffect(() => {
    //     const menuBtn = document.querySelector('.menuBtn');
    //     const mobileMenu = document.querySelector('.slide');

        
    //     menuBtn?.addEventListener("click", () => {
    //         menuBtn.classList.toggle("open");
    //         mobileMenu?.classList.toggle("open");
    //     });

    //  },[])
  return (
      <>
       <Container>
          <Wrapper>
                  <Bar id="burger">Icon</Bar>
              <Button>My post</Button>
          </Wrapper>
          </Container>
          <Menu id='slide'>
              <DisplayMenu />
          </Menu>
      </>
  )
}

export default Header

// const Container = styled.div``
const Bar = styled.div`
    /* display: none;
    @media (max-width: 1008px){
        display: block;
    } */
`
const Button = styled.button`
    display: block;
    padding: 10px 25px;
    border: 0px;
    outline: none;
    border-radius: 5px;

    background-color: orange;
    font-weight: 600;
    color: white;
    cursor: pointer;
`
const Menu = styled.div`
    width: 250px;
    height: 100vh;
    position: fixed;
    top: 0px;
    left: 0px;
    background-color: lightgray;

    border-left: 1px solid ;

    @media (max-width: 1008px){
        display: none;
    }
`
const Wrapper = styled.div`
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: white;
`

const Container = styled.div`
    width: 100%;
    max-width: 2000px;
    height: 70px;

    display: flex;
    align-items: center;
    justify-content: center;
    background-color: black;
    position: fixed;
`