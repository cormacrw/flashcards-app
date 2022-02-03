import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import colors from '../../../styles/colors'
import verticalCard from '../../../styles/verticalCard'

const WideCardButton = (props) => {
  let textStyle, buttonStyle
  if(props.primary) {
    textStyle = Object.assign({}, verticalCard.wideButtonText, colors.colorPrimary)
    buttonStyle = Object.assign({}, verticalCard.wideButton, colors.secondaryBackground)
  } else {
    textStyle = Object.assign({}, verticalCard.wideButtonText, colors.colorSecondary)
    buttonStyle = Object.assign({}, verticalCard.wideButton, colors.primaryBackground)
  }

  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={buttonStyle}>
        <Text style={textStyle}>{props.text}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default WideCardButton