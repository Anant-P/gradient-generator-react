import {Component} from 'react'
import {
  MainContainer,
  Heading,
  Paragraph,
  UnorderList,
  Form,
  FormContainer,
  Input,
  GenrateBtn,
} from './styledComponents'

import GradientDirectionItem from '../GradientDirectionItem'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]
// Write your code here

class GradientGenerator extends Component {
  state = {
    color1: '#8ae323',
    color2: '#014f7b',
    direction: gradientDirectionsList[0].value,
    gradientValue: `to ${gradientDirectionsList[0].value}, #8ae323, #014f7b`,
  }

  onSelectColor1 = event => {
    this.setState({color1: event.target.value})
  }

  onSelectColor2 = event => {
    this.setState({color2: event.target.value})
  }

  selectDirection = value => {
    this.setState({
      direction: `${value}`,
    })
  }

  onGenrateBtnClick = () => {
    const {color1, color2, direction} = this.state
    this.setState({gradientValue: `to ${direction}, ${color1}, ${color2}`})
  }

  render() {
    const {color1, color2, direction, gradientValue} = this.state
    console.log(direction)

    return (
      <MainContainer
        gradientValue={gradientValue}
        data-testid="gradientGenerator"
      >
        <Heading>Generate a CSS Color Gradient</Heading>
        <Paragraph>Choose Direction</Paragraph>
        <UnorderList>
          {gradientDirectionsList.map(eachItem => (
            <GradientDirectionItem
              key={eachItem.directionId}
              directionDetails={eachItem}
              selectDirection={this.selectDirection}
              activeDirection={eachItem.value === direction}
            />
          ))}
        </UnorderList>
        <Paragraph>Pick the Colors</Paragraph>
        <Form>
          <FormContainer>
            <Paragraph>{color1}</Paragraph>
            <Input type="color" value={color1} onChange={this.onSelectColor1} />
          </FormContainer>
          <FormContainer>
            <Paragraph>{color2}</Paragraph>
            <Input type="color" value={color2} onChange={this.onSelectColor2} />
          </FormContainer>
        </Form>
        <GenrateBtn onClick={this.onGenrateBtnClick}>Generate</GenrateBtn>
      </MainContainer>
    )
  }
}

export default GradientGenerator
