import React from 'react'
import { Text, View } from 'react-native'
import verticalCard from '../../../styles/verticalCard'
import Icon from 'react-native-vector-icons/FontAwesome5'
import WideCardButton from './WideCardButton'
import colors from '../../../styles/colors'
const DeckVerticalCard = (props) => {
  const deck = props.deck
  const cardStyle = Object.assign({}, verticalCard.verticalCard, props.primary ? colors.primaryBackground : colors.secondaryBackground)
  const iconContainerStyle = Object.assign({}, verticalCard.iconContainer, props.primary ? colors.primaryOpaqueBackground : colors.secondaryOpaqueBackground)
  const iconStyle = Object.assign({}, verticalCard.icon, props.primary ? colors.colorSecondary : colors.colorPrimary)
  const textStyle = Object.assign({}, verticalCard.cardLabel, props.primary ? colors.colorSecondary : colors.colorPrimary)
  return (
    <View style={cardStyle} key={props.itemKey}>
      <View style={iconContainerStyle}>
        <Icon name={deck.d_icon} style={iconStyle} />
      </View>
      <Text style={textStyle}>{deck.d_name}</Text>
      <WideCardButton text={'GO!'} primary={props.primary} onPress={() => props.goToDeck(deck)}/>
    </View>
  )
}

export default DeckVerticalCard