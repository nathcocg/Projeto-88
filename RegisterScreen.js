import React, { Component } from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  TextInput,
  Alert, 
  TouchableOpacity,
  Text
} from "react-native";

import firebase from "firebase";
import { RFValue } from "react-native-responsive-fontsize";
import * as Font from "expo-font";

import * as SplashScreen from 'expo-splash-screen';
SplashScreen.preventAutoHideAsync();

let customFonts = {
  "Bubblegum-Sans": require("../assets/fonts/BubblegumSans-Regular.ttf"),
};

const appIcon = require("../assets/logo.png");

export default class RegisterScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name:"",
      last_name:"",
      email: "",
      password: "",
      confirmPassword: "",
      fontsLoaded: false
    };
  }
  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
  }
}

registerUser = (email, password,confirmPassword,first_name,last_name) => {
    if(password==confirmPassword){
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
          Alert.alert("Usuário registrado!");
          console.log(userCredential.user.uid)
          this.props.navigation.replace("Login");
          firebase.database().ref("/users/" + userCredential.user.uid)
                  .set({
                    email: userCredential.user.email,
                    first_name: first_name,
                    last_name: last_name,
                    current_theme: "dark"
                  })
        })
        .catch(error => {
          Alert.alert(error.message);
        });
      }else{
        Alert.alert("As senhas não são iguais");
      }
    };