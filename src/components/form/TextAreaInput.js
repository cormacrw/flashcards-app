import React from 'react'
import { TextInput, View } from 'react-native'
import form from '../../styles/form'

const TextAreaInput = (props) => {
  return (
    <View>
      <TextInput
        style={form.textArea}
        placeholder={props.placeholder}
        value={props.value}
        editable={!props.disabled}
        onChangeText={props.onChange}
        multiline={true}
        numberOfLines={4}
      />
    </View>
  )
}

export default TextAreaInput