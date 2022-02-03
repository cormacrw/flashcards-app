import React from 'react'
import { TextInput, View } from 'react-native'
import card from '../../styles/card'
import colors from '../../styles/colors'
import Card from './Card'
import IconHeader from './IconHeader'

const EditCard = (props) => {
  const textInputStyle = Object.assign({}, card.editInput, props.question ? colors.colorSecondary : colors.colorPrimary)
  return (
    <Card question={props.question}>
      <IconHeader question={props.question} />
      <TextInput placeholder={props.placeholder} value={props.value} style={textInputStyle} onChangeText={props.onChange} multiline editable={!props.disabled} />
    </Card>
  )
}

export default EditCard