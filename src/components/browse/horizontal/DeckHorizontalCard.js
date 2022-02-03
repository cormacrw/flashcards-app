import React from 'react'
import { Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import colors from '../../../styles/colors'
import horizontalCard from '../../../styles/horizontalCard'
import SquareDeckButton from './SquareDeckButton'

const DeckHorizontalCard = (props) => {
  const cardStyle = Object.assign({}, horizontalCard.horizontalCard, props.primary ? colors.primaryBackground : colors.secondaryBackground)
  const iconContainerStyle = Object.assign({}, horizontalCard.iconContainer, props.primary ? colors.primaryOpaqueBackground : colors.secondaryOpaqueBackground)
  const iconStyle = Object.assign({}, horizontalCard.icon, props.primary ? colors.colorSecondary : colors.colorPrimary)
  const textStyle = Object.assign({}, horizontalCard.cardLabel, props.primary ? colors.colorSecondary : colors.colorPrimary)
  return (
    <View style={cardStyle}>
      <View style={iconContainerStyle}>
        <Icon name={props.deck.d_icon} style={iconStyle} />
      </View>
      <Text style={textStyle}>{props.deck.d_name}</Text>
      <SquareDeckButton iconName={'arrow-right'} primary={props.primary} onPress={() => props.goToDeck(props.deck)}/>
    </View>
  )
}

export default DeckHorizontalCard

