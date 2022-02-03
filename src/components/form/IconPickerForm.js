import React from 'react'
import { View } from 'react-native'
import icons from '../../assets/icons'
import iconPicker from '../../styles/iconPicker'
import IconPickerButton from './IconPickerButton'

const IconPickerForm = (props) => {
  return (
    <View style={iconPicker.iconOptionsContainer}>
      {icons.map((icon, index) => <IconPickerButton key={index} iconName={icon} onPress={() => props.setIcon(icon)}/>)}
    </View>
  )
}

export default IconPickerForm