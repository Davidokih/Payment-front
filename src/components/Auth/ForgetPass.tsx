import React from 'react'
import styled from 'styled-components'

const ForgetPass = () => {
  return (
    <Container>
          <Wrapper>
              <InputHold>
              {/* <Input placeholder='Email'/> */}
              <Input placeholder='Password'/>
              <Input placeholder='Confirm-Password'/>
              </InputHold>
              <Button>Submit</Button>

          </Wrapper>
    </Container>
  )
}

export default ForgetPass

const Button = styled.button`
    padding: 10px 30px;
    border: 0px;
    outline: none;

    border-radius: 5px;
    background-color: orange;
    color: white;
    font-weight: 700;
    font-size: 18px;
`
const Input = styled.input`
    width: 250px;
    height: 30px;
    border-radius: 5px;
    border: 0px;
    outline: none;
    padding: 10px;
    font-weight: 400;
    font-size: 15px;
    margin-bottom: 10px;
`
const InputHold = styled.div`
    width: 80%;
    margin-bottom: 20px;
`
const Wrapper = styled.div`
    width: 350px;
    height: 500px;

    background-color: #7f8e8eb7;
    border-radius: 20px;
    box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px, rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px, rgba(0, 0, 0, 0.07) 0px 16px 16px;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`
const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: flex;
    align-items: center;
    justify-content: center;
`