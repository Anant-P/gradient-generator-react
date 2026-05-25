// Write your code here
import {DirectionList, DirectionButton} from './styledComponents'

const GradientDirectionItem = props => {
  const {directionDetails, selectDirection, activeDirection} = props
  const {value, displayText} = directionDetails

  const onSelectDirection = () => selectDirection(value)
  // const highlightBtn = activeDirection ? '#ededed' : '#ffffff79'

  return (
    <DirectionList>
      <DirectionButton
        type="button"
        opacity={activeDirection}
        onClick={onSelectDirection}
      >
        {displayText}
      </DirectionButton>
    </DirectionList>
  )
}

export default GradientDirectionItem
