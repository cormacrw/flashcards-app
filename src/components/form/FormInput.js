import React from 'react'
import { TextInput, View } from 'react-native'
import form from '../../styles/form'
import TextAreaInput from './TextAreaInput'

const FormInput = (props) => {
  return (
    <View>
      <TextInput placeholder={props.placeholder} style={form.input} onChangeText={props.onChange} value={props.value} />
    </View>
  )
}

export default FormInput