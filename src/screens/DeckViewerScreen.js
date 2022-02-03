import React, { useState } from 'react'
import FlipCard from 'react-native-flip-card'
import ButtonRow from '../components/card/ButtonRow'
import ScreenHeader from '../components/ScreenHeader'
import ScreenWrapper from '../containers/ScreenWrapper'
import Card from '../components/card/Card'
import CardText from '../components/card/CardText'
import IconHeader from '../components/card/IconHeader'
import ProgressBar from '../components/progress/ProgressBar'
import { useFocusEffect } from '@react-navigation/native'

/**
 * @CormacWilliamson
 * Component for the deck viewing screen
 */
const DeckViewerScreen = (props) => {
  const [deck, setDeck] = useState({})
  const [cards, setCards] = useState([])
  const [flip, setFlip] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [disableNext, setDisableNext] = useState(false)
  const [disablePrev, setDisablePrev] = useState(true)
  const activeCard = cards[currentIndex] || {}

  useFocusEffect(() => {
    const unsubscribe = props.navigation.addListener('focus', () => {
      setCards(props.route.params.cards)
      setDeck(props.route.params.deck)
      if(props.route.params.cards.length === 1) {
        setDisableNext(true)
      }
    })

    return unsubscribe
  })

  const nextCard = () => {
    setCurrentIndex(currentIndex + 1)
    setDisablePrev(false)
    if(currentIndex + 2 === cards.length) {
      setDisableNext(true)
    }
  }
  
  const prevCard = () => {
    setCurrentIndex(currentIndex - 1)
    setDisableNext(false)
    if(currentIndex - 1 === 0) {
      setDisablePrev(true)
    }
  }
  
  return (
    <ScreenWrapper navigation={props.navigation}>
      <ScreenHeader text={deck.d_name} />
      <ProgressBar index={currentIndex} deckLength={cards.length} />
      <FlipCard
        flip={flip}
        flipHorizontal
        flipVertical={false}
        friction={8}
        clickable={false}
      >
        <Card cardStyle={{height: 240}} question={true}>
          <IconHeader question={true}/>
          <CardText text={activeCard.c_question} question={true} />
        </Card>
        <Card cardStyle={{height: 240}} question={false}>
          <IconHeader question={false}/>
          <CardText text={activeCard.c_answer} question={false} />
        </Card>
      </FlipCard>
      <ButtonRow
        flipCard={() => setFlip(!flip)}
        disablePrev={disablePrev}
        disableNext={disableNext}
        nextCard={nextCard}
        prevCard={prevCard}
        />
    </ScreenWrapper>
  )
}

export default DeckViewerScreen