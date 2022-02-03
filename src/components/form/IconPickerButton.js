import React from 'react'
import { TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import iconPicker from '../../styles/iconPicker'

const IconPickerButton = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={iconPicker.iconOption}>
        <Icon name={props.iconName} style={iconPicker.iconPickerIcon} solid={props.solid} />
      </View>
    </TouchableOpacity>
  )
}

export default IconPickerButton