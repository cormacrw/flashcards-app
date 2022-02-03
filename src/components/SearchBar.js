import React from 'react'
import { TextInput, View } from 'react-native'
import searchBar from '../styles/searchBar'

const SearchBar = (props) => {
  return (
    <View>
      <TextInput style={searchBar.input} placeholder={'Search for a deck...'} onChangeText={props.onChange}/>
    </View>
  )
}

export default SearchBar