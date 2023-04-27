import { StyleSheet, Text, View, ScrollView, Pressable, Image } from 'react-native'
import React from 'react'

const Services = () => {

    // const services = [
    //     {
    //         id: "0",
    //         image: "https://cdn-icons-png.flaticon.com/128/3003/3003984.png",
    //         name: "Washing",
    //     },
    //     {
    //         id: "11",
    //         image: "https://cdn-icons-png.flaticon.com/128/2975/2975175.png",
    //         name: "Laundry",
    //     },
    //     {
    //         id: "12",
    //         image: "https://cdn-icons-png.flaticon.com/128/9753/9753675.png",
    //         name: "Wash & Iron",
    //     },
    //     {
    //         id: "13",
    //         image: "https://cdn-icons-png.flaticon.com/128/995/995016.png",
    //         name: "Cleaning",
    //     },
    // ];



    // products data 
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

        <View style={{ padding: 10 }}>
            <Text style={{ fontSize: 16, fontWeight: "500", marginBottom: 7 }}>Services Available</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {services.map((service, index) => (
                    <Pressable style={{ margin: 10, backgroundColor: "white", padding: 20, borderRadius: 7 }} key={index}>
                        <Image source={{ uri: service.image }} style={{ width: 70, height: 70 }} />
                        <Text style={{ textAlign: "center", marginTop: 10 }}>{service.name}</Text>
                    </Pressable>
                ))}
            </ScrollView>
        </View>

    )
}

export default Services

const styles = StyleSheet.create({})