import {  } from 'react-native-gesture-handler'
import {  Text, View, TouchableOpacity, TextInput, FlatList, Image } from 'react-native'
import React, { useState} from 'react'
import {SafeAreaView} from 'react-native-safe-area-context'
import { Feather, Ionicons} from 'react-native-vector-icons'
import styles from './search.style'
import { COLORS, SIZES } from '../constants'
import axios from 'axios'
import SearchTile from '../components/products/SearchTile'


const Search = () => {

  const [searchKey, setSearchKey] = useState('');

  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => { 
    try {
      const response = await axios.get(`http://localhost:3000/api/products/search/${searchKey}`)
      console.log(response.data)
      setSearchResults(response.data)
    } catch (error) {
      console.log("failed to get the products", error);
    }
  }

  return (
    <SafeAreaView>
      <View style= {styles.searchContainer}>
      <TouchableOpacity>
        <Ionicons name='camera-outline' size={SIZES.xLarge} style= {styles.searchIcon}/>
      </TouchableOpacity>
      <View style= {styles.searchWrapper}>
        <TextInput
        style= {styles.searchInput}
        value={searchKey}
        onChangeText= {setSearchKey}
        placeholder= 'What are you looking for'
        />
      </View>
      <View>
      <TouchableOpacity style= {styles.searchBtn} onPress= {() => handleSearch()}>
        <Feather name='search' size= {24} color={COLORS.offwhite}/>
      </TouchableOpacity>
    </View>
    </View>
    {searchResults.length === 0 ? (
      <View style= {{flex: 1}}>
        <Image 
        source={require('../../App/assets/images/pose23.png')}
        style={styles.searchImage}
        />
      </View>
    ) : (
      <FlatList 
      data={searchResults}
      keyExtractor= {(item) => item._id}
      renderItem= {({item}) => (<SearchTile item={item}/>)}
      style= {{marginHorizontal: 12}}
      />
    )}
    </SafeAreaView>
  )
}

export default Search

