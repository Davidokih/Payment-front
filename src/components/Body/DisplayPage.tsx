import React from 'react'
import styled from "styled-components"
import Header from '../Header/Header'

const DisplayPage = () => {
  return (
      <>
        <Header />
      <Container>
          <Wrapper>
              <Card>
                  <Hold>
                      <Name>David Okih</Name>
                      <Title>Credit</Title>
                  </Hold>
                  <Price>₦100,00</Price>
              </Card>
          </Wrapper>
    </Container>
      </>
  )
}

export default DisplayPage

const Price = styled.div`
    font-size: 20px;
    font-weight: 700;
    color: #51fa51;
`
const Title = styled.div`
    font-size: 15px;
    font-weight: 700;
`
const Name = styled.div`
    font-size: 20px;
    font-weight: 700;
`
const Hold = styled.div`
    margin-bottom: 10px;
`
const Card = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid lightgray;
    padding: 0px 10px;
    margin-top: 80px;
`
const Wrapper = styled.div`
    width: 90%;
    /* border-bottom: 1px solid lightgray; */
`
const Container = styled.div`
    /* width: 100%; */

    display: flex;
    align-items: center;
    justify-content: center;
    /* margin-top: 10px; */
    margin-left: 199px;

    @media (max-width: 1008px){
        margin-left: 0px;
    }
    /* position: relative; */
`