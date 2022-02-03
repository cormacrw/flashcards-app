import React from 'react'
import { View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import card from '../../styles/card'
import colors from '../../styles/colors'

const IconHeader = (props) => {
  const iconStyle = Object.assign({}, card.icon, props.question ? colors.colorSecondary : colors.colorPrimary)
  const iconBackgroundStyle = Object.assign({}, card.iconContainer, props.question ? colors.primaryOpaqueBackground : colors.secondaryOpaqueBackground)
  return (
    <View>
      <View style={iconBackgroundStyle}>
        <Icon name={props.question ? 'question' : 'book-open'} style={iconStyle} />
      </View>
    </View>
  )
}

export default IconHeader