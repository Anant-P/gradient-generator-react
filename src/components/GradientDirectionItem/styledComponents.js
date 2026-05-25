// Style your elements here
import styled from 'styled-components'

export const DirectionList = styled.li`
  list-style: none;
`
export const DirectionButton = styled.button`
  background-color: #ffffff;
  opacity: ${props => (props.opacity ? 1 : 0.5)};
  color: #1e293b;
  width: 80px;
  height: 35px;
  border: none;
  border-radius: 4px;
`
