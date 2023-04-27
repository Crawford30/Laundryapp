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

        console.log("ENABLED: ", enabled)

        if (!enabled) {
            //Give alert message to the user
            Alert.alert('Location services are not enabled', 'Please enable location button', [
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

    };
    const getCurrentLocation = async () => {

        let { status } = await Location.requestForegroundPermissionsAsync();

        console.log("STATUS: ", status)

        if (status !== "granted") {
            Alert.alert(
                "Permission denied",
                "Allow the app to use the location services",
                [
                    {
                        text: "Cancel",
                        onPress: () => console.log("Cancel Pressed"),
                        style: "cancel",
                    },
                    { text: "OK", onPress: () => console.log("OK Pressed") },
                ],
                { cancelable: false }
            );
        }

        const { coords } = await Location.getCurrentPositionAsync();
        console.log("CORDS:", coords)
        if (coords) {
            const { latitude, longitude } = coords;

            //Reverse Geocode method
            let response = await Location.reverseGeocodeAsync({
                latitude,
                longitude,
            });

            console.log("response ", response)

            for (let item of response) {
                let address = `${item.name} ${item.city} ${item.postalCode}`;
                setDisplayCurrentAddress(address);
            }
        }
        // let status = await Location.requestForegroundPermissionsAsync();

        // console.log("STATUS: ", status)

        // if (status !== "granted") {
        //     Alert.alert('Permission denied', 'Allow the app to use the location services', [
        //         {
        //             text: 'Cancel',
        //             onPress: () => console.log('Cancel Pressed'),
        //             style: 'cancel',
        //         },
        //         {
        //             text: 'OK', onPress: () => {

        //             }
        //         },
        //     ],
        //         { cancelable: false });
        // };
        // //if permission granted

        // const { cords } = await Location.getCurrentPositionAsync();

        // console.log("CORDS: ", cords)

        // if (cords) {
        //     const { latitude, longitude } = cords;

        //     //Reverse Geocode method

        //     let response = await Location.reverseGeocodeAsync({ latitude, longitude });



        //     for (let item in response) {
        //         let address = `${item.name} ${item.city} ${item.postalCode}`;
        //         setDisplayCurrentAddress(address);
        //     }
        //     console.log("RESPONSE: ", response)

        // }

    }



    return (
        <SafeAreaView>
            <Text>HomeScreen</Text>
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})