import React from 'react'
import CardCarousel from '../components/browse/vertical/CardCarousel'
import SectionHeader from '../components/SectionHeader'

const SuggestedDecksSection = (props) => {
  return (
    <React.Fragment>
      <SectionHeader text={'Suggested Decks'} />
      <CardCarousel decks={props.decks} goToDeck={props.goToDeck} />
    </React.Fragment>
  )
}

export default SuggestedDecksSection