import React from 'react'
import { TouchableOpacity, View } from 'react-native'
import navBar from '../../styles/navBar'
import Icon from 'react-native-vector-icons/FontAwesome5'

const PlusButton = (props) => {
  return (
    <View style={navBar.plusButton}>
      <TouchableOpacity onPress={props.onClick}>
        <Icon name={props.iconName} style={navBar.plusIcon} solid />
      </TouchableOpacity>
    </View>
  )
}

export default PlusButton