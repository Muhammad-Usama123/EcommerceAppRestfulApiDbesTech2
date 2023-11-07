import { TouchableOpacity ,Text, View, Image } from 'react-native'
import React from 'react'
import styles from './productCardView.style'
import {Ionicons} from 'react-native-vector-icons'
import { COLORS } from '../../constants'
import { useNavigation } from '@react-navigation/native'

const ProductCardView = () => {

  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.navigate('ProductDetails')}>
        <View style= {styles.container}>
            <View style={styles.imageContainer}>
                <Image 
                source={{uri: "https://st4.depositphotos.com/1023934/37752/i/450/depositphotos_377527168-stock-photo-interior-design-modern-living-room.jpg"}}
                style= {styles.image}
                />
            </View>
            <View style= {styles.details}>
              <Text style= {styles.title} numberOfLines={1}>Product</Text>
              <Text style= {styles.supplier} numberOfLines={1}>Product</Text>
              <Text style= {styles.price}>$2353</Text>
            </View>
            <TouchableOpacity style= {styles.addBtn}>
              <Ionicons name='add-circle' size= {35} color={COLORS.primary}/>
            </TouchableOpacity>
        </View>
    </TouchableOpacity>
  )
}

export default ProductCardView
