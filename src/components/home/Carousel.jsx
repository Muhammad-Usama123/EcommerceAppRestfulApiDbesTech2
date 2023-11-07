import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {SliderBox} from 'react-native-image-slider-box'
import { COLORS } from '../../constants'


const Carousel = () => {

    const slides = [
        'https://st4.depositphotos.com/1023934/37752/i/450/depositphotos_377527168-stock-photo-interior-design-modern-living-room.jpg',
        'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZ1cm5pdHVyZXxlbnwwfHwwfHx8MA%3D%3D'
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