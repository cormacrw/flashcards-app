import React from 'react'
import { TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import navBar from '../../styles/navBar'

const NavItem = (props) => {
  let iconStyle = navBar.navIcon
  if(props.active) {
    iconStyle = Object.assign({}, navBar.navIcon, navBar.navIconActive)
  }
  return (
    <TouchableOpacity onPress={props.onClick}>
      <Icon name={props.iconName} style={iconStyle} solid={props.solid} />
    </TouchableOpacity>
  )
}

export default NavItem