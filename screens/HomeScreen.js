import { StyleSheet, Text, View, SafeAreaView, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import * as Location from 'expo-location'


const HomeScreen = () => {
    const [displayCurrentAddress, setDisplayCurrentAddress] = useState("We are loading your location");
    const [locationServicesEnabled, setLocationServicesEnabled] = useState(false)


    useEffect(() => {
        checkIfLocationIsEnabled();
        getCurrentLocation();

    }, [])



    const checkIfLocationIsEnabled = async () => {
        let enabled = await Location.hasServicesEnabledAsync();

        if (!enabled) {
            //Give alert message to the user
            Alert.alert('Location services are sot enabled', 'Please enable location button', [
                {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel',
                },
                { text: 'OK', onPress: () => console.log('OK Pressed') },
            ]);
        } else {
            setLocationServicesEnabled(enabled)
        }


    }
    const getCurrentLocation = () => {

    }



    return (
        <SafeAreaView>
            <Text>HomeScreen</Text>
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})