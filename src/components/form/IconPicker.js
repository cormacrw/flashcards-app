import React from 'react'
import { TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import iconPicker from '../../styles/iconPicker'

const IconPicker = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress} disabled={props.disabled}>
      <View style={iconPicker.iconPicker}>
        <Icon name={props.iconName} style={iconPicker.iconPickerIcon}/>
      </View>
    </TouchableOpacity>
  )
}

export default IconPicker