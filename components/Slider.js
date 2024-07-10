import { Pressable, StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native'
import React, { useState } from 'react'
import {ScaledSheet} from "react-native-size-matters"
export default function Slider() {
 
    const [position, setPosition] = useState(0);

  return (
    <TouchableWithoutFeedback style={styles.slideContainer}
        onTouchMove={(e) => {
            setPosition(e.nativeEvent.locationX);
        }}
    >
      <View style={[styles.slider, {
        left: position
      }]} />
    </TouchableWithoutFeedback>
  )
}

const styles = ScaledSheet.create({
    slideContainer: {
        width: "700@s",
        height: "70@vs",
        backgroundColor: "black",
        position: "relative"
    },
    slider: {
        width: "100@s",
        height: "100%",
        backgroundColor: "white",
        position: "absolute",
    }
})