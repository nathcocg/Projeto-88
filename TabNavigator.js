import {createBottomNavigator} from "@react-navigation/bottom-tabs";
import Feed from "../screens/Feed";
import CreatePost from "../screens/Createpost";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Platform } from "react-native";
import { StatusBar } from "expo-status-bar";
import { RFValue } from "react-native-responsive-fontsize";

const Tab = createBottomTabNavigator();
const BottomTabNavigator =()=>{
    return(
        <Tab.Navigator 
            screenOptions = {({route})=>({
                tabBarIcon : ({focused, color, size})=>{
                var iconName;
                if(route.name == 'Feed'){
                    iconName = focused ? "book" : "book-outline";
                } else if(route.name == 'CreatePost'){
                    iconName = focused ? "create" : "create-outline";
                }
                return <Ionicons name = {iconName} size = {size} color = "color"/>
                }
            })}
            tabBarOptions = {{
                activeTintColor : "tomato",
                inactiveTintColor : "gray"
            }}
        >
            <Tab.Screen name = "Feed" component = {Feed}/>
            <Tab.Screen name = "CreatePost" component = {CreatePost}/>
        </Tab.Navigator>
    );
} 

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: "black"
    },  
    droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35)
    },
    appTitle: {
       flex: 0.07,
       flexDirection: "row" 
    },
    appIcon: {
        flex: 0.2,
        justifyContent: "center",
        alignItems: "center"
    },
    iconImage: {
        width: "100%",
        height: "100%",
        resizeMode: "contain"
    },
    appTitleTextContainer: {
        flex: 0.8,
        justifyContent: "center"
    },
    appTitleText: {
        color: "white",
        fontSize: RFValue(28)
    },
    cardContainer: {
        flex: 0.85
    }
});

export default BottomTabNavigator;