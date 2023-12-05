import { StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import {Ionicons} from 'react-native-vector-icons'
import { COLORS } from '../constants'

const BackBtn = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
        <Ionicons 
        name='chevron-back-circle'
        size={30}
        color={COLORS.primary}
        />
    </TouchableOpacity>
  )
}

export default BackBtn;

const styles = StyleSheet.create({})