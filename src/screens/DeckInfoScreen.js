import { useFocusEffect } from '@react-navigation/native'
import React, { useState } from 'react'
import { ActivityIndicator, View } from 'react-native'
import IconPicker from '../components/form/IconPicker'
import IconPickerButton from '../components/form/IconPickerButton'
import TextAreaInput from '../components/form/TextAreaInput'
import ScreenHeader from '../components/ScreenHeader'
import Spinner from '../components/Spinner'
import CardForm from '../containers/CardForm'
import ScreenWrapper from '../containers/ScreenWrapper'
import Datasource from '../data/Datasource'
import DeckHandler from '../data/handlers/DeckHandler'
import colors from '../styles/colors'

/**
 * @CormacWilliamson
 * Screen for previewing a deck before viewing it
 */
const DeckInfoScreen = (props) => {
  const [deck, setDeck] = useState({})
  const [cards, setCards] = useState([])
  const [loading, setLoading] = useState(true)

  const getCards = async (deckId) => {
    const dbConn = await Datasource.getDatasource()
    const newCards = await DeckHandler.getCards(dbConn, deckId)

    setCards(newCards)
    setLoading(false)
  }

  useFocusEffect(() => {
    const unsubscribe = props.navigation.addListener('focus', () => {
      setLoading(true)
      setDeck(props.route.params.deck)
      getCards(props.route.params.deck.d_id)
    })

    return unsubscribe
  })

  const toggleFavourite = async () => {
    const newFav = deck.d_favourite === 1 ? 0 : 1
    const newDeck = Object.assign({}, deck, {d_favourite: newFav})
    
    // update db
    const dbConn = await Datasource.getDatasource()
    await DeckHandler.favouriteDeck(dbConn, deck.d_id, newFav)
    
    setDeck(newDeck)
  }

  const deleteDeck = async () => {
    const dbConn = await Datasource.getDatasource()
    await DeckHandler.deleteDeck(dbConn, deck.d_id)
    props.navigation.navigate('Home')
  }

  const editDeck = () => {
    props.navigation.navigate('DeckForm', {deck, cards})
  }

  const goToDeck = () => {
    props.navigation.navigate('DeckViewer', {deck, cards})
  }

  return (
    <ScreenWrapper navigation={props.navigation}>
      <View style={{height: 30}}></View>
      <IconPicker iconName={deck.d_icon} disabled/>
      <ScreenHeader text={deck.d_name} />
      <TextAreaInput value={deck.d_description} disabled={true} />
      <View style={{flexDirection:'row', justifyContent: 'center'}}>
        <IconPickerButton iconName={'play'} onPress={goToDeck}/>
        <IconPickerButton iconName={'star'} solid={deck.d_favourite === 1} onPress={toggleFavourite} />
        {deck.d_u_id === 1 && <IconPickerButton iconName={'pen'} onPress={editDeck}/>}
        {deck.d_u_id === 1 && <IconPickerButton iconName={'trash'} onPress={deleteDeck}/>}
      </View>
      { loading
        ? <Spinner />
        : cards.map((card, index) => <CardForm index={index} cardData={card} disabled={true} key={index} />)
      }
      
    </ScreenWrapper>
  )
}

export default DeckInfoScreen