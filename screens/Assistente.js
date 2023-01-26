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

export default class HomeScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <SafeAreaView style={styles.droidSafeArea} />
                <ImageBackground source={require('../assets/FundoAssistente.jpg')} style={styles.backgroundImage}>
                
                    <View style={styles.titleBar}>
                        <Text style={styles.titleText}>Assistente</Text>
                    </View>
                  

                    <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("Assistente")
                    }>
                        <Text style={styles.routeText}>Marta de Jesus</Text>
                        <Image source={require("../assets/imageAssistentes.png")} style={styles.iconImage}></Image>
                        <Text style={styles.knowMore}>{"Informação de Contato: (99) 99999-9999"}</Text>
                        <Text style={styles.text}>{"Meu nome é Marta de Jesus, estarei com você nessa jornada, pode contar comigo pois estou sempre de plantão, deixei meu telefone para conversarmos melhor"}</Text>
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
        flex: 0.70,
        marginLeft: 50,
        marginRight: 50,
        marginTop: 50,
        borderRadius: 30,
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
        paddingLeft: 30
    },
    knowMore: {
        paddingLeft: 18,
        color: "rgba(10, 10, 120, 0.5)",
        fontSize: 15
    },
    iconImage: {
        position: "absolute",
        height: 1000,
        width: 290,
        resizeMode: "contain",
        right: 30,
        top: -0.5
    },
    text:{
        paddingLeft: 18,
        marginTop: 30,
        color: "rgba(9, 80, 150, 0.5)",
        fontSize: 15
    }
});