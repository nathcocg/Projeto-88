import React from "react";
import {createDrawerNavigation} from "react-navigation/drawer";
import TabNavigator from "./TabNavigator";
import Profile from "../screens/Profile";
import { SafeAreaView } from "react-native";
import { Image } from "react-native-paper/lib/typescript/components/Avatar/Avatar";
import { Text } from "react-native-paper";
import { FlatList } from "react-native-gesture-handler";


const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return(
        <Drawer.Navigator>
            <Drawer.Screen name = "Home" component = {TabNavigator}/>
            <Drawer.Screen name = "Perfil" component = {Profile}/>
        </Drawer.Navigator>

    );

    return(
        <View style={styles.container}>
            <SafeAreaView style={styles.droidSafeArea}/>
            <View style={styles.appTitle}>
                <View style={styles.appIcon}>
                    <Image
                        source={require("../assets/logo.png")}
                        style={Styles.iconImage}
                    ></Image>
                </View>
                <View style={styles.appTitleTextContainer}>
                    <Text style={styles.appTitleText}>Espectagrama</Text>
                </View>
            </View>
            <View style={styles.cardContainer}>
                <FlatList
                    keyExtractor={this.keyExtractor}
                    data={posts}
                    renderItem={this.renderItem}
                />
            </View>
        </View>
    );

}