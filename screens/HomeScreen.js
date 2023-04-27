import { StyleSheet, Text, View, SafeAreaView, Alert, Pressable, Image, TextInput, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import * as Location from 'expo-location';
import { MaterialIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import Carousel from '../components/Carousel';
import Services from '../components/Services';
import DressItem from '../components/DressItem';





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


    const services = [
        {
            id: "0",
            image: "https://cdn-icons-png.flaticon.com/128/4643/4643574.png",
            name: "shirt",
            quantity: 0,
            price: 10,
        },
        {
            id: "11",
            image: "https://cdn-icons-png.flaticon.com/128/892/892458.png",
            name: "T-shirt",
            quantity: 0,
            price: 10,
        },
        {
            id: "12",
            image: "https://cdn-icons-png.flaticon.com/128/9609/9609161.png",
            name: "dresses",
            quantity: 0,
            price: 10,
        },
        {
            id: "13",
            image: "https://cdn-icons-png.flaticon.com/128/599/599388.png",
            name: "jeans",
            quantity: 0,
            price: 10,
        },
        {
            id: "14",
            image: "https://cdn-icons-png.flaticon.com/128/9431/9431166.png",
            name: "Sweater",
            quantity: 0,
            price: 10,
        },
        {
            id: "15",
            image: "https://cdn-icons-png.flaticon.com/128/3345/3345397.png",
            name: "shorts",
            quantity: 0,
            price: 10,
        },
        {
            id: "16",
            image: "https://cdn-icons-png.flaticon.com/128/293/293241.png",
            name: "Sleeveless",
            quantity: 0,
            price: 10,
        },
    ];

    return (
        <ScrollView style={{ backgroundColor: "#F0F0F0", flex: 1, marginTop: 50 }}>

            {/* Location and Profile */}
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

            {/* Search Bar */}
            <View style={{ padding: 10, margin: 10, flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderWidth: 0.8, borderColor: "#c0c0c0", borderRadius: 7 }}>
                <TextInput placeholder="Search for item or more"></TextInput>
                <Feather name="search" size={24} color="#fd5c63" />
            </View>

            {/* Carousel Component */}
            <Carousel />

            {/* Services Component */}
            <Services />

            {/* Render All the products*/}
            {services.map((item, index) => {
                <DressItem key={index} item={item} />
            })}




        </ScrollView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})