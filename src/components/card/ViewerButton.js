import React from 'react'
import { TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import card from '../../styles/card'

const ViewerButton = (props) => {
  let buttonStyle = props.disabled ? card.viewerButtonDisabled : card.viewerButton
  let iconStyle = props.disabled ? card.viewerButtonIconDisabled : card.viewerButtonIcon
  return (
    <TouchableOpacity onPress={props.onPress} disabled={props.disabled}>
      <View style={buttonStyle}>
        <Icon name={props.iconName} style={iconStyle} />
      </View>
    </TouchableOpacity>
  )
}

export default ViewerButton