import React from "react";
import { Component } from "react";
import {StyleSheet, Text, View} from "react-native";
import firebase from "firebase";

export default class Logout extends Component {
    /*async _loadFontsAsync() {
        await Font.loadAsync(customFonts);
        this.setState({ fontsLoaded: true });
    }*/
    componentDidMount(){
        firebase.auth().signOut();
        this.props.navigation.replace("Login");
    }
    render (){
        return(
            <View styles = {styles.container}>
                <Text>Sair</Text>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex : 1,
        justifyContent : "center",
        alingItens : "center",
    }
});