import React, { useEffect, useState } from 'react'
import ScreenHeader from '../components/ScreenHeader'
import ScreenWrapper from '../containers/ScreenWrapper'
import SearchBar from '../components/SearchBar'
import DeckList from '../components/browse/horizontal/DeckList'
import SectionHeader from '../components/SectionHeader'
import { useFocusEffect } from '@react-navigation/native'
import DeckHandler from '../data/handlers/DeckHandler'
import Spinner from '../components/Spinner'
import Datasource from '../data/Datasource'

/**
 * @CormacWilliamson
 * Component for the favourites screen
 */
const FavouriteScreen = (props) => {
  const [decks, setDecks] = useState([])
  const [filteredDecks, setFilteredDecks] = useState([])
  const [loading, setLoading] = useState(true)

  const getFavouriteDecks = async () => {
    const dbConn = await Datasource.getDatasource()
    const newFavouriteDecks = await DeckHandler.getFavouriteDecks(dbConn)
    setDecks(newFavouriteDecks)
    setFilteredDecks(newFavouriteDecks)
    setLoading(false)
  }

  useEffect(() => {
    const unsubscribe = props.navigation.addListener('focus', () => {
      setLoading(true)
      getFavouriteDecks()
    })
  }, [])

  const search = term => {
    // if no search terms, show all
    if(term === '') {
      setFilteredDecks(decks)
      return
    }

    const newArr = decks.filter(deck => deck.d_name.toLowerCase().includes(term))

    setFilteredDecks(newArr)
  }

  return (
    <ScreenWrapper navigation={props.navigation} screen={'Favourite'}>
      <ScreenHeader text={'Favourites'} />
      
      <SearchBar onChange={search}/>
      <SectionHeader text={'Decks'}/>
      { loading
        ? <Spinner />
        : <DeckList decks={filteredDecks} />
      }
    </ScreenWrapper>
  )
}

export default FavouriteScreen