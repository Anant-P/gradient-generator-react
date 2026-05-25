// Style your elements here

import styled from 'styled-components'

export const MainContainer = styled.div`
  background-image: ${props => `linear-gradient(${props.gradientValue})`};
  height: 100vh;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const Heading = styled.h1`
  font-size: 28px;
`
export const Paragraph = styled.p`
  font-size: 18px;
`
export const UnorderList = styled.ul`
  display: flex;
  gap: 16px;
`
export const Form = styled.form`
  display: flex;
  gap: 36px;
`
export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const Label = styled.label`
  color: #fff;
`
export const Input = styled.input`
  padding: 0;
  width: 80px;
  height: 40px;
  margin: 12px 0;
  background-color: transparent;
  border: none;
`
export const GenrateBtn = styled.button`
  background-color: #00c9b7;
  color: #1e293b;
  width: 100px;
  height: 35px;
  border: none;
  border-radius: 4px;
  margin: 16px 0;
  font-weight: bold;
`
