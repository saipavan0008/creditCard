// Write your code here

import {useState} from 'react'

import {
  MainContainer,
  CreditCardContainer,
  TextContainer,
  Heading,
  Line,
  ImageContainer,
  HeadingCard,
  NameHeading,
  HeadingName,
  SmallContainer,
  NameInput,
  CardNumber,
} from './styledComponents'

const CreditCard = () => {
  const [number, setterNumber] = useState('')
  const [name, setterName] = useState('')

  const onChangeNumber = event => {
    setterNumber(event.target.value)
  }

  const onChangeName = event => {
    // const upper = event.target.value
    setterName(event.target.value)
  }

  return (
    <MainContainer>
      <CreditCardContainer>
        <Heading>CREDIT CARD</Heading>
        <Line />
        <ImageContainer data-testid="creditCard">
          <HeadingCard>{number}</HeadingCard>
          <NameHeading>CARDHOLDER NAME</NameHeading>
          <HeadingName> {name.toUpperCase()} </HeadingName>
        </ImageContainer>
      </CreditCardContainer>
      <TextContainer>
        <SmallContainer>
          <NameInput>Payment Method</NameInput>
          <CardNumber
            type="text"
            placeholder="Card Number"
            onChange={onChangeNumber}
            value={number}
          />
          <CardNumber
            type="text"
            placeholder="Cardholder Name"
            onChange={onChangeName}
            value={name}
          />
        </SmallContainer>
      </TextContainer>
    </MainContainer>
  )
}
export default CreditCard
