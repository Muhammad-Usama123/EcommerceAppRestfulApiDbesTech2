import { Text, View, ScrollView, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import styles from './login.style'
import { BackBtn } from '../components'
import { SafeAreaView } from 'react-native-safe-area-context'




const LoginPage = ({navigation}) => {

  const [loader, setLoader] = useState(false);
  const [responseData, setResponseData] = useState(null);
  const [error, setError] = useState({})
  const [input, setInput] = useState({
    email: '',
    password: ''
  })

  return (
    <ScrollView>
      <SafeAreaView style={{marginHorizontal: 20}}>
        <View>
          <BackBtn onPress={()=>navigation.goBack()}/>
        </View>
      </SafeAreaView>
    </ScrollView>
  )
}

export default LoginPage;
