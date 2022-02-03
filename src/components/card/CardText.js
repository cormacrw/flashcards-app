import React from 'react'
import { Text } from 'react-native'
import card from '../../styles/card'
import colors from '../../styles/colors'

const CardText = (props) => {
  const textStyle = Object.assign({}, card.cardText, props.question ? colors.colorSecondary : colors.colorPrimary)
  return <Text style={textStyle}>{props.text}</Text>
}

export default CardText