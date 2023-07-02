// Style your elements here
import styled from 'styled-components'

export const MainContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
`
export const CreditCardContainer = styled.div`
  background-color: #3b4b69;
  background-size: cover;
  width: 50vw;
  height: 80vw;
`
export const TextContainer = styled.div`
  background-color: #ffffff;
  width: 50vw;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`
export const Heading = styled.h1`
  color: #ffffff;
  font-size: 30px;
  font-weight: 500;
  font-family: 'Roboto';
  text-align: center;
  border-bottom: 0px;
`
export const HeadingCard = styled.p`
  color: #ffffff;
  font-size: 30px;
  font-weight: 500;
  font-family: 'Roboto';
  padding-top: 130px;
  padding-left: 40px;
  border-bottom: 0px;
`
export const HeadingName = styled.p`
  color: #ffffff;
  font-size: 27px;
  font-weight: 500;
  font-family: 'Roboto';
  padding-top: 1px;
  padding-left: 40px;
  border-bottom: 0px;
`

export const Line = styled.hr`
  width: 160px;
  border: 3px #ffd773 solid;
  border-top: 0px;
`
export const ImageContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/hooks/credit-card-bg.png');
  height: 350px;
  width: 600px;
  margin: 20px;
  border-radius: 20px;
  margin-top: 200px;
`
export const NameHeading = styled.p`
  font-size: 18px;
  font-family: 'Roboto';
  font-weight: 250;
  padding-left: 40px;
  padding-top: 40px;
  color: #ffffff;
`
export const SmallContainer = styled.div`
  height: 230px;
  width: 400px;
  box-shadow: 3px 3px 3px 3px #d3d9e0;
  border-radius: 10px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const NameInput = styled.h1`
  color: #475569;
  font-size: 20px;
  text-align: center;
  font-family: 'Roboto';
`
export const CardNumber = styled.input`
  height: 30px;
  width: 290px;
  border-width: 1px;
  border-color: #d3d9e0;
  border-radius: 5px;
  margin-top: 20px;
`
