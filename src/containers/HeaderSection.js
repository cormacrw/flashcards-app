import React from 'react'
import { Image, Text, View } from 'react-native'
import main from '../styles/main'
import homeHeader from '../styles/homeHeader'

const HeaderSection = (props) => (
  <View style={homeHeader.container}>
    <Image style={homeHeader.img} source={require('../assets/img/book-icon.png')} />
    <Text style={main.lgHeader}>The Study App.</Text>
  </View>
)

export default HeaderSection