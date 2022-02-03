import React from 'react'
import { View } from 'react-native'
import card from '../../styles/card'
import colors from '../../styles/colors'

const Card = (props) => {
  const cardStyle = Object.assign({}, card.card, props.question ? colors.primaryBackground : colors.secondaryBackground, props.cardStyle ? props.cardStyle : {})
  return (
    <View style={cardStyle}>
      {props.children}
    </View>
  )
}

export default Card