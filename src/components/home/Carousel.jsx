import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {SliderBox} from 'react-native-image-slider-box'
import { COLORS } from '../../constants'


const Carousel = () => {

    const slides = [
        'profile.jpeg'
    ]

  return (
    <View style ={styles.carouselContainer}>
      <SliderBox images={slides}
      dotColor = {COLORS.primary}
      inactiveDotColor = {COLORS.secondary}
      imageComponentStyle = {{ borderRadius: 15, width: '92%', marginTop: 15}}
      autoplay
      circleLoop
      />
    </View>
  )
}

export default Carousel

const styles = StyleSheet.create({
    carouselContainer: {
        flex: 1,
        alignItems: 'center'
    }
})