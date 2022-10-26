import React, { useState } from 'react'
import styled from 'styled-components'
import SignIn from './SignIn'

const SignUp = () => {

    const [change, setChange] = useState(true)
  return (
      <Container>
          <Wrapper>
              <TextHold>
                  <Div>
                  To begin the development, run `npm start` or `yarn start`.
      To create a production bundle, use `npm run build` or `yarn build`.
                  </Div>
              </TextHold>
              <Card>
                  {
                      change ? (<Head>
                          <Buttons>SignUp</Buttons>
                          <Buttons onClick={ () => {
                              setChange(false)
                          } }>LogIn</Buttons>
                          
                      </Head>) : (<Head>
                        <Buttons onClick={ () => {
                          setChange(true)
                      }}>SignUp</Buttons>
                      <Buttons>LogIn</Buttons>
                      </Head>)
}
                <InputHold>
                      {
                          change ? (<div>
                              <Input placeholder='User-Name'/>
                          <Input placeholder='Full-Name'/>
                          <Input placeholder='Password'/>
                          <Input placeholder='Confirm-Password'/>
                          </div>) : (<SignIn />)
                }
                </InputHold>
              <Button>Submit</Button>
             </Card>

          </Wrapper>
    </Container>
  )
}

export default SignUp

const Buttons = styled.div`
    font-size: 18px;
    font-weight: 700;

    color: white;
    padding: 10px 30px;
    border-bottom: 4px solid white;
    cursor: pointer;
    /* background-color: rgba(0,0,0,0.8); */
`
const Head = styled.div`
    width: 70%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 20px;
`
const Div = styled.div`
    text-align: center;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
`
const TextHold = styled.div`
    width: 300px;

    @media (max-width: 968px){
        display: none;
    }
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
    cursor: pointer;
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
    margin-top: 40px;
    margin-bottom: 20px;
`
const Card = styled.div`
    width: 350px;
    height: 500px;
    background-color: #110fb1d7;

    border-radius: 20px;

    display: flex;
    align-items: center;
    /* justify-content: center; */
    flex-direction: column;

    margin-bottom: 20px;
`
const Wrapper = styled.div`
    width:70%;
    display: flex;
    align-items: center;
    justify-content: space-around;

    box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px, rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px, rgba(0, 0, 0, 0.07) 0px 16px 16px;

    @media (max-width: 968px){
        box-shadow: none;
    }
`
const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: flex;
    align-items: center;
    justify-content: center;
`