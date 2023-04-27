import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { SliderBox } from "react-native-image-slider-box";

const Carousel = () => {
    const images = [
        "https://source.unsplash.com/1024x768/?nature",
        "https://source.unsplash.com/1024x768/?water",
        "https://source.unsplash.com/1024x768/?girl",
        "https://source.unsplash.com/1024x768/?tree", // Network image
        // require('./assets/images/girl.jpg'),          // Local image
    ]
    return (
        <View>
            <SliderBox images={images}
                autoplay
                circleLoop
                dotColor="#13274F"
                inactiveDotColor="#90A4AE"
                ImageComponentStyle={{ borderRadius: 6, width: '94%', marginTop: 5 }} />
        </View>
    )
}

export default Carousel

const styles = StyleSheet.create({})