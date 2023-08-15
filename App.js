import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import img from './assets/Ashoka_Chakra.svg.webp'
import { Image } from 'react-native'

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <View style={styles.flag}>
          <View style={styles.top}></View>
          <View style={styles.middle}>
            <View styles={styles.circle}>
              <Image source={img} style={styles.img} />
            </View>
          </View>
          <View style={styles.bottom}></View>
        </View>
        <View style={styles.stick}></View>
        <View style={styles.first}></View>
        <View style={styles.second}></View>
        <View style={styles.third}></View>
      </View>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    // marginTop: 50
  },
  
  box: {
    backgroundColor: 'aliceblue',
    paddingTop: 50,
    width: '100%',
    height: '100%',
    paddingLeft: '20%'
  },


  top: {
    height: 50,
    width: '90%',
    backgroundColor: '#ff9933',
    borderTopStartRadius: 50
  },
  
  middle: {
    height: 50,
    width: '90%',
    backgroundColor: 'white',
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center'
  },
  
  bottom: {
    height: 50,
    width: '90%',
    backgroundColor: 'green',
    borderBottomEndRadius: 50
  },

  circle: {
    width: 100,
    height: 100,
    borderRadius: '50%',
    borderWidth: 1,
    borderColor: 'red',
    position: 'absolute',
    
  },

  stick: {
    borderWidth: 1,
    borderColor: 'darkorange',
    width: 15,
    height: '70%',
    marginLeft: -10,
    marginTop: -150,
    backgroundColor: 'indianred',
    borderTopRightRadius: 50,
    borderTopLeftRadius: 40
  },

  first: {
    height: 50,
    width: '50%',
    backgroundColor: 'purple',
    left: -70,
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
  },
  
  second: {
    height: 50,
    width: '80%',
    backgroundColor: 'purple',
    left: -100,
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
    top: 1
  },
  
  third: {
    height: 50,
    width: '100%',
    backgroundColor: 'purple',
    left: -110,
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
    top: 2,
  },

  img: {
    width: 50,
    height: 50,
   
  }
})