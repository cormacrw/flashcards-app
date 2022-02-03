import React from 'react'
import { Text, View } from 'react-native'
import main from '../styles/main'

const ScreenHeader = (props) => {
  return (
    <View>
      <Text style={main.screenHeader}>{props.text}</Text>
    </View>
  )
}

export default ScreenHeader