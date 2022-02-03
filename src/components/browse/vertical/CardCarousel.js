import React from 'react'
import { FlatList } from 'react-native'
import DeckVerticalCard from './DeckVerticalCard'

const renderCard = (props, goToDeck) => {
  const deck = props.item
  let primary = props.index % 2 === 0
  return <DeckVerticalCard primary={primary} deck={deck} itemKey={props.index} key={props.index} goToDeck={goToDeck} />
}

const CardCarousel = (props) => {
  return (
    <React.Fragment>
      <FlatList
        data={props.decks}
        keyExtractor={(props, index) => index}
        renderItem={(_props) => renderCard(_props, props.goToDeck)}
        // ItemSeparatorComponent={() => <View style={{width: 15}}></View>}
        horizontal
      />
    </React.Fragment>
  )
}

export default CardCarousel