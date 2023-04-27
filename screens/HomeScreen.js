import { StyleSheet, Text, View, SafeAreaView, Alert, Pressable, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import * as Location from 'expo-location';
import { MaterialIcons } from '@expo/vector-icons';


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

        //if permission granted
        const { coords } = await Location.getCurrentPositionAsync();

        if (coords) {
            const { latitude, longitude } = coords;

            //Reverse Geocode method
            let response = await Location.reverseGeocodeAsync({
                latitude,
                longitude,
            });

            //console.log("response ", response)
            for (let item of response) {
                let address = `${item.name} ${item.city} ${item.postalCode}`;
                setDisplayCurrentAddress(address);
            }
        }


    }



    return (
        <SafeAreaView>
            <View style={{ flexDirection: "row", alignItems: "center", padding: 10 }}>
                <MaterialIcons name="location-on" size={30} color="#fd5c63" />
                <View>
                    <Text style={{ fontSize: 18, fontWeight: "600" }}>Home</Text>
                    <Text>{displayCurrentAddress}</Text>
                </View>

            </View>
            <Pressable style={{ marginLeft: "auto", marginRight: 7 }}>
                <Image style={{ width: 40, height: 40, borderRadius: 20 }} source={{ uri: "https://lh3.googleusercontent.com/ogw/AOLn63E6EXErelWxXSUFxUiORVdmlsp-qjQWBmx6iCtqjg=s64-c-mo" }}></Image>
            </Pressable>

        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})