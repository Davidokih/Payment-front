import React from 'react'
import styled from 'styled-components'

const SignIn = () => {
  return (
      <div>
              <Input placeholder='Email'/>
              <Input placeholder='Password'/>
          </div>
  )
}

export default SignIn

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
