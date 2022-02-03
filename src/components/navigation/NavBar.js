import React from 'react'
import { View } from 'react-native'
import navBar from '../../styles/navBar'
import NavItem from './NavItem'
import CircleButton from './CircleButton'

const NavBar = ({navigation, activeScreen, showSaveButton, onSave}) => {
  const createDeckOnPress = () => navigation.navigate('DeckForm') 
  return (
    <View style={navBar.navBar}>
      <NavItem iconName={'home'} active={activeScreen === 'Home'} onClick={() => navigation.navigate('Home')} />
      <CircleButton iconName={showSaveButton ? 'save' : 'plus'} onClick={showSaveButton ? onSave : createDeckOnPress} />
      <NavItem iconName={'heart'} active={activeScreen === 'Favourite'} onClick={() => navigation.navigate('Favourite')} solid />
    </View>
  )
}

export default NavBar