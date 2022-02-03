import React from 'react'
import { Text, View } from 'react-native'
import EditCard from '../components/card/EditCard'
import SectionHeader from '../components/SectionHeader'

const CardForm = (props) => {
  let newCard = Object.assign({}, props.cardData)
  
  const updateQuestion = text => {
    newCard.c_question = text
    props.updateCard(newCard, props.index)
  }

  const updateAnswer = text => {
    newCard.c_answer = text
    props.updateCard(newCard, props.index)
  }

  return (
    <View style={{paddingTop: 10, paddingBottom: 15}}>
      <SectionHeader text={'Card ' + (props.index + 1)}/>
      <EditCard question={true} value={props.cardData.c_question} placeholder={'type your question...'} onChange={updateQuestion} disabled={props.disabled} />
      <EditCard value={props.cardData.c_answer} placeholder={'type your answer...'} onChange={updateAnswer} disabled={props.disabled} />
    </View>
  )
}

export default CardForm