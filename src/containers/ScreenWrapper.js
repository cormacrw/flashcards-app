import React from 'react'
import { SafeAreaView, ScrollView, View } from 'react-native'
import NavBar from '../components/navigation/NavBar'
/**
 * @CormacWilliamson
 * This is the foundation component for all screens within the app
 */
const ScreenWrapper = (props) => {
  return (
    <SafeAreaView>
      <ScrollView style={{height: '90%'}}>
        {props.children}
      </ScrollView>
      <View style={{height: '10%'}}>
        <NavBar navigation={props.navigation} activeScreen={props.screen} showSaveButton={props.showSaveButton} onSave={props.onSave} />
      </View>
    </SafeAreaView>
  )
}

export default ScreenWrapper