import React, { useEffect, useState } from 'react'
import HeaderSection from "../containers/HeaderSection"
import SuggestedDecksSection from "../containers/SuggestedDecksSection"
import MyDecksSection from "../containers/MyDecksSection"
import ScreenWrapper from "../containers/ScreenWrapper"
import DeckHandler from '../data/handlers/DeckHandler'
import Datasource from '../data/Datasource'
import { useFocusEffect } from '@react-navigation/native'
import { ActivityIndicator } from 'react-native'
import colors from '../styles/colors'
import Spinner from '../components/Spinner'

/**
 * @CormacWilliamson
 * Component for the home screen
 */
const HomeScreen = ({navigation}) => {
  const [myDecks, setMyDecks] = useState([])
  const [suggestedDecks, setSuggestedDecks] = useState([])
  const [loading, setLoading] = useState(true)

  const goToDeck = async (deck) => {
    navigation.navigate('DeckInfo', {deck})
  }

  const refreshData = async () => {
    const dbConn = await Datasource.getDatasource()
    const newMyDecks = await DeckHandler.getMyDecks(dbConn)
    const newSuggestedDecks = await DeckHandler.getSuggestedDecks(dbConn)

    setSuggestedDecks(newSuggestedDecks)
    setMyDecks(newMyDecks)
    setLoading(false)
  }

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      console.log('refreshing!')
      setLoading(true)
      refreshData()
    })
  }, [])

  const renderHome = () => (
    <>
      <SuggestedDecksSection decks={suggestedDecks} goToDeck={goToDeck} />
      <MyDecksSection decks={myDecks} goToDeck={goToDeck} />
    </>
  )

  const renderLoading = () => <Spinner />

  return (
    <ScreenWrapper navigation={navigation} screen={'Home'}>
      <HeaderSection />
      {loading ? renderLoading() : renderHome()}
    </ScreenWrapper>
  )
}

export default HomeScreen