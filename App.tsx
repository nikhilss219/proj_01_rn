import React from 'react'

import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TextInput
} from 'react-native'

function App(){
  return (
  <ScrollView>
    <View>
      <Image
            source={{
              uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
            }}
            style={{width: 200, height: 200}}
      />
    </View>
    <View
      style={{
          flex:1,
          justifyContent:'center',
          alignItems:'center'
      }}>
        <Text>Hello World!</Text>
      </View>
    <TextInput
    style={{
      height:40,
      borderColor:'blue',
      borderWidth:1,
    }}
    defaultValue='text inputs here'
    />
  </ScrollView>)
}

export default App;