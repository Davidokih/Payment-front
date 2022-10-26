import React from 'react'
import styled from 'styled-components'

const Verified = () => {
  return (
    <Container>
          <Wrapper>
              <Image src="/congrates.gif" />
              <Text>You account is now verified</Text>
        <InputHold>
            click on the button below to logIn your account
        </InputHold>
        <Button>Click to Verified</Button>
    </Wrapper>
</Container>
  )
}

export default Verified

const Text = styled.div`
    font-size: 25px;
    font-weight: 800;
    font-family: Ingrid Darling;

    position: absolute;
`   
const Image = styled.img`
    height: 200px;
`
const Button = styled.button`
    padding: 10px 30px;
    border: 0px;
    outline: none;

    border-radius: 5px;
    background-color: orange;
    color: white;
    font-weight: 700;
    font-size: 18px;
    margin-bottom: 20px;
`
const Input = styled.input`
    /* width: 250px; */
    /* height: 30px; */
    border-radius: 5px;
    border: 0px;
    outline: none;
    padding: 10px;
    font-weight: 400;
    font-size: 15px;
    margin-bottom: 10px;
`
const InputHold = styled.div`
    width: 90%;
    margin-top: 20px;
    margin-bottom: 20px;
    text-align: center;
`
const Wrapper = styled.div`
    /* width: 350px; */
    /* height: 400px; */

    border-radius: 20px;
    box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px, rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px, rgba(0, 0, 0, 0.07) 0px 16px 16px;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    span{
        color: blue;
        font-weight: 700;
        cursor: pointer;
    }
`
const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: flex;
    align-items: center;
    justify-content: center;
`