import React from 'react'
import { FlatList, View } from 'react-native'
import DeckHorizontalCard from './DeckHorizontalCard'

const renderDeck = (deck, index, goToDeck) => {
  const primary = index % 2 === 0
  return (
    <DeckHorizontalCard key={index} deck={deck} primary={primary} goToDeck={goToDeck} />
  )
}

const DeckList = (props) => {
  return (
    <View style={{marginBottom: 30}}>
      {props.decks.map((deck, index) => renderDeck(deck, index, props.goToDeck))}
    </View>
  )
}

export default DeckList