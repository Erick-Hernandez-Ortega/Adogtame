import { StyleSheet, View } from 'react-native'
import React from 'react'
import AnimatedLottieView from "lottie-react-native";

const DogLoading = React.memo(() => {
  return (
    <View style={{ justifyContent: "center", alignItems: "center" }}>
        <AnimatedLottieView
          source={require("../../../assets/fonts/DogLoading.json")}
          autoPlay
          style={{ width: "40%", marginBottom: 5 }}
          loop
        />
      </View>
  )
})

export default DogLoading

const styles = StyleSheet.create({})