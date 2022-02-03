import React from 'react'
import { ActivityIndicator } from 'react-native'
import colors from '../styles/colors'

const Spinner = (props) => {
  return <ActivityIndicator color={colors.primaryColor} size={80} style={{marginTop: 10}}/>
}

export default Spinner