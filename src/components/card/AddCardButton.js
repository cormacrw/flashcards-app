import React from 'react'
import { TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import card from '../../styles/card'

const AddCardButton = (props) => {
  return (
    <View style={{alignItems: 'center', marginBottom: 50}}>
      <TouchableOpacity onPress={props.onPress}>
        <View style={card.addCardButtonContainer}>
          <Icon name={'plus'} style={card.addCardButtonIcon} />
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default AddCardButton