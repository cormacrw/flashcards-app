import React from 'react'
import { View } from 'react-native'
import card from '../../styles/card'
import ViewerButton from './ViewerButton'

const ButtonRow = (props) => {
  return (
    <View style={card.buttonRow}>
      <ViewerButton iconName={'arrow-left'} onPress={props.prevCard} disabled={props.disablePrev} />
      <ViewerButton iconName={'exchange-alt'} onPress={props.flipCard} />
      <ViewerButton iconName={'arrow-right'} onPress={props.nextCard} disabled={props.disableNext} />
    </View>
  )
}

export default ButtonRow