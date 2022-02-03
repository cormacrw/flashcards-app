import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import colors from '../../../styles/colors'
import horizontalCard from '../../../styles/horizontalCard'

const SquareDeckButton = (props) => {
  let iconStyle, buttonStyle
  if(props.primary) {
    iconStyle = Object.assign({}, horizontalCard.buttonIcon, colors.colorSecondary)
    buttonStyle = Object.assign({}, horizontalCard.button, colors.primaryOpaqueBackground)
  } else {
    iconStyle = Object.assign({}, horizontalCard.buttonIcon, colors.colorPrimary)
    buttonStyle = Object.assign({}, horizontalCard.button, colors.secondaryOpaqueBackground)
  }
  return (
    <TouchableOpacity style={{position: 'absolute', right: 8, top: 8}} onPress={props.onPress}>
      <View style={buttonStyle}>
        <Icon name={props.iconName} style={iconStyle} />
      </View>
    </TouchableOpacity>
  )
}


export default SquareDeckButton