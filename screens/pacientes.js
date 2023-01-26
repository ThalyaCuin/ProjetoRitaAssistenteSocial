import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
    Platform,
    StatusBar,
    ImageBackground,
    Image
} from "react-native";

export default class pacienteScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <SafeAreaView style={styles.droidSafeArea} />
                <ImageBackground source={require('../assets/FundoPacientes.jpg')} style={styles.backgroundImage}>
                <Image source={require("../assets/prancheta.png")} style={styles.iconImage}></Image>
                    <View style={styles.titleBar}>
                        <Text style={styles.titleText}>Pacientes</Text>
                    </View>

                    <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("pacientes")
                    }>
                        <Text style={styles.routeText}>Ana Clara</Text>

                        
                    </TouchableOpacity>

                

                    <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("pacientes")
                    }>
                        <Text style={styles.routeText}>Miguel Luiz</Text>
                       

                    </TouchableOpacity>

                </ImageBackground>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
    },
    routeCard: {
        flex: 0.15,
        marginLeft: 75,
        marginRight: 75,
        marginTop: 75,
        borderRadius: 45,
        backgroundColor: 'white'
    },
    titleBar: {
        flex: 0.15,
        justifyContent: "center",
        alignItems: "center"
    },
    titleText: {
        fontSize: 40,
        fontWeight: "bold",
        color: "black"
    },
    routeText: {
        fontSize: 35,
        fontWeight: "bold",
        color: "rgba(110, 13, 183, 0.5)",
        marginTop: 30,
        paddingLeft: 38
    },
    iconImage: {
        position: "absolute",
        height: 1500,
        width: 100,
        resizeMode: "contain",
        right: 30,
        top: -0.5
    }
});