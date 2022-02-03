import React from 'react'
import DeckList from '../components/browse/horizontal/DeckList'
import SectionHeader from '../components/SectionHeader'

const MyDecksSection = (props) => {
  return (
    <React.Fragment>
      <SectionHeader text={'My Decks'} />
      <DeckList decks={props.decks} goToDeck={props.goToDeck} />
    </React.Fragment>
  )
}

export default MyDecksSection