import {useState} from 'react'
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList
} from 'react-native'
import {useRouter} from 'expo-router'
import{icons, SIZES} from '../../../constants'
import styles from './welcome.style'

const jobtypes =['Full-Time', 'Part-time', 'Contract']
const Welcome = () => {
  
  const router =useRouter();
  const [activeJobType, setactiveJobType] =useState('Full-time')
  return(
    <View style={{flex:1}}>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello Owen😉</Text>
        <Text style={styles.UserName}>Find Your Perfect Job</Text>
      </View>
      
      <View style={styles.searchContainer} >
        <View styles={styles.searchWrapper} >
          <TextInput 
          style={styles.searchInput}
          value=''
          onChange={()=> {}}
          placeholder='What are you looking for'
          />
        </View>
        
        <TouchableOpacity style={styles.searchBtn} onPress={()=>{}}>
          <Image
          source={icons.search}
          resizeMode='contain'
          style={styles.searchbtnImage}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.tabsContainer}>
        <FlatList
        data={jobtypes}
        renderItem={({item})=>(
          <TouchableOpacity
          style={styles.tab(activeJobType, item)}
          onPress={()=> {
            setactiveJobType(item);
            router.push(`/search/${item}`)
          }}
          >
          <Text style={styles.tabText(activeJobType, item)}>{item}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={item=>item}
        contentContainerStyle={{columnGap:SIZES.small}}
        horizontal
        />


      </View>
    </View>
  )
  
}

export default Welcome