import React from 'react'
import { Text, View } from 'react-native'
import progress from '../../styles/progress'

const ProgressBar = (props) => {
  let foregroundBar = {}
  if(props.index + 1 !== props.deckLength) {
    const percentage = (props.index + 1) / props.deckLength * 100
    foregroundBar = {
      width: percentage + '%'
    }
  }
  return (
    <View style={{marginTop: 60, marginBottom: 30}}>
      <Text style={progress.label}>{props.index + 1} of {props.deckLength}</Text>
      <View style={progress.backgroundBar}></View>
      <View style={Object.assign({}, progress.foregroundBar, foregroundBar)}></View>
    </View>  
  )
}

export default ProgressBar