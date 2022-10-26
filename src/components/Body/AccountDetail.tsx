import React from 'react'
import styled from 'styled-components'
import Header from '../Header/Header'

const AccountDetail = () => {
  return (
      <>
          <Header />
         <Container>
          <Wrapper>
              <Card>
                  <Head>
                      <Input placeholder="Account Name"/>
                      <Input placeholder="Account Name"/>
                  </Head>
                  <Section></Section>

                  <Button>Submit</Button>
              </Card>
          </Wrapper>
    </Container>
      </>
  )
}

export default AccountDetail

const Section = styled.div`
    width: 150px;
    height: 150px;

    border: 1px solid lightgray;

    margin-bottom: 20px;
`
const Button = styled.button`
    border: 0px;
    outline: none;
    border-radius: 5px;
    padding: 10px 30px;
    background-color: orange;
    font-size: 17px;
    color: white;
    font-weight: 700;

    :hover{
        border: 1px solid black;
        color: black;
        background-color: white;
    }
`
const Input = styled.input`
    width: 150px;
    height: 25px;
    border: 1px solid lightgray;

    outline: none;
`
const Head = styled.div`
    width: 350px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* background-color: gold; */

    margin-bottom: 20px;
`
const Card = styled.div`
   /* width: 350px; */
    /* height: 400px; */

    border-radius: 20px;
    box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px, rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px, rgba(0, 0, 0, 0.07) 0px 16px 16px;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`
const Wrapper = styled.div`
    width: 80%;
`
const Container = styled.div`
     /* width: 100%; */
     height: 100vh;
     /* min-height: calc(100vh - 50px); */

     display: flex;
    align-items: center;
    justify-content: center;
    /* margin-top: 10px; */
    margin-left: 199px;

    @media (max-width: 1008px){
        margin-left: 0px;
    }
`