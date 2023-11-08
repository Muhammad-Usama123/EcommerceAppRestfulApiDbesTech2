import { Text, View, SafeAreaView, TouchableOpacity } from 'react-native'
import {Ionicons} from 'react-native-vector-icons'
import React from 'react'
import styles from './newRivals.styles'
import { COLORS } from '../constants'
import { ProductList } from '../components'


const NewRivals = ({navigation}) => {
  return (
    <SafeAreaView style = {styles.container}>
      <View style = {styles.wrapper}>
        <View style={styles.upperRow}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name= 'chevron-back-circle' 
            size={30} color= {COLORS.lightWhite}/>
            </TouchableOpacity>
            <Text style= {styles.heading}> Products </Text>
        </View>
        <ProductList />
      </View>
    </SafeAreaView>
  )
}

export default NewRivals
