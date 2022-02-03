import React from 'react'
import { Text } from 'react-native'
import main from '../styles/main'


const SectionHeader = (props) => (
  <Text style={main.smHeader}>{props.text}</Text>
)

export default SectionHeader