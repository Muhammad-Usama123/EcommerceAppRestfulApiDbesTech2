import { StyleSheet, Text, View } from 'react-native'
import { COLORS, SIZES } from '../constants';

const styles = StyleSheet.create({
    cover: {
        height: SIZES.height/2.4,
        width: SIZES.width-60,
        resizeMode: 'contain',
        marginBottom: SIZES.xxLarge
    },
    title: {
        fontFamily: "bold",
        fontSize: SIZES.xLarge,
        color: COLORS.primary,
        alignItems: 'center',
        marginBottom: SIZES.xxLarge
      },
    wrapper: {
        marginBottom: 20,
        marginHorizontal: 20
    },
    label: {
        fontFamily: "regular",
        fontSize: SIZES.xSmall,
        marginBottom: 5,
        marginEnd: 5,
        textAlign: 'right'
    }
})

export default styles;