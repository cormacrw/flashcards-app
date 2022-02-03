import React, { useEffect, useState } from 'react'
import AddCardButton from '../components/card/AddCardButton'
import FormInput from '../components/form/FormInput'
import IconPicker from '../components/form/IconPicker'
import IconPickerForm from '../components/form/IconPickerForm'
import TextAreaInput from '../components/form/TextAreaInput'
import ScreenHeader from '../components/ScreenHeader'
import CardForm from '../containers/CardForm'
import ScreenWrapper from '../containers/ScreenWrapper'
import Datasource from '../data/Datasource'
import DeckHandler from '../data/handlers/DeckHandler'

const startCard = {
  c_question: '',
  c_answer: ''
}

/**
 * @CormacWilliamson
 * Component for the screen where the user will create or edit a deck
 */
const DeckFormScreen = (props) => {
  const [deckId, setDeckId] = useState(0)
  const [deckTitle, setDeckTitle] = useState('')
  const [deckDescription, setDeckDescription] = useState('')
  const [deckIcon, setDeckIcon] = useState('question')
  const [cards, setCards] = useState([startCard])
  const [showIconPickerForm, setShowIconPickerForm] = useState(false)
  const [editMode, setEditMode] = useState(false)

  useEffect(() => {
    const unsubscribe = props.navigation.addListener('focus', () => {
      // check if there is a deck in params, meaning we are editing not creating
      if(props.route.params && props.route.params.deck) {
        const deck = props.route.params.deck
        const cards = props.route.params.cards

        setEditMode(true)
        setDeckId(deck.d_id)
        setDeckTitle(deck.d_name)
        setDeckDescription(deck.d_description)
        setDeckIcon(deck.d_icon)
        setCards(cards)
      }
    })
  }, [])

  const addCard = () => {
    let newCards = cards.slice()
    newCards.push(startCard)

    setCards(newCards)
  }

  const updateCard = (card, index) => {
    let newCards = cards.slice()
    newCards[index] = card
    setCards(newCards)
  }

  const setIcon = (iconName) => {
    setDeckIcon(iconName)
    setShowIconPickerForm(false)
  }

  const saveDeck = async () => {
    const dbConn = await Datasource.getDatasource()
    // if editing a deck, update it else create it
    let newDeckId
    if(editMode) {
      newDeckId = deckId
      await DeckHandler.updateDeck(dbConn, deckId, deckTitle, deckDescription, deckIcon, cards)
    } else {
      newDeckId = await DeckHandler.createDeck(dbConn, deckTitle, deckDescription, 1, deckIcon, cards)
    }
    const deckObj = {
      d_id: newDeckId,
      d_name: deckTitle,
      d_description: deckDescription,
      d_icon: deckIcon,
      d_u_id: 1
    }

    props.navigation.navigate('DeckInfo', {deck: deckObj})

  }

  if(showIconPickerForm) {
    return (
      <ScreenWrapper navigation={props.navigation}>
        <ScreenHeader text={'Choose Icon'} />
        <IconPickerForm setIcon={setIcon}/>
      </ScreenWrapper>
    )
  } else {
    return (
      <ScreenWrapper navigation={props.navigation} showSaveButton={true} onSave={saveDeck}>
        <ScreenHeader text={'Create Deck'} />
        <IconPicker iconName={deckIcon} onPress={() => setShowIconPickerForm(true)}/>
        <FormInput placeholder={'Deck name'} onChange={setDeckTitle} value={deckTitle} />
        <TextAreaInput placeholder={'Deck Description'} onChange={setDeckDescription} value={deckDescription} />
        {cards.map((card, index) => <CardForm index={index} cardData={card} updateCard={updateCard} key={index} />)}
        <AddCardButton onPress={addCard} />
      </ScreenWrapper>
    )
  }
}

export default DeckFormScreen