import React from "react-native";
import { View, TExt, image, ScrollView, TextInput, SafeAreaView } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import DropDownPicker from "react-native-dropdown-picker";

import * as Font from "expo-font";

var customFonts = {
    "Bubblegum-Sans" : require("../assets/fonts/BubblegumSans-regular.ttf"),
};

export default class CreatePost extends Component { 
    constructor(props) {
        super(props);
        this.state = {
            fontLoaded: false,
            dropdownHeight: 40,
            previewImage: "image_1"
        }
    }

    async _loadFontsAsync(){
        await Font.loadAsync(customFonts);
        this.setState({ fontsLoaded: true});
    }

    async addPost(){
        if(this.state.caption){
            let postData = {
                preview_image: this.state.previewImage,
                caption: this.state.caption,
                author: firebase.auth().currentUser.displayName,
                created_on: new Date(),
                author_uid: firebase.auth().currentUser.uid,
                profile_image: this.state.profile_image,
                likes: 0 
            };
            await firebase.database.ref(
                "/posts/" +
                Math.random()
                .toString(36)
                .slice(2)
            )
                .set(postData)
                .then(function(snapshot){});
            this.setUpdateToTrue();
            this.props.navigation.navigare("Feed");
        } else {
            Alert.alert(
                "Error", 
                "Todos os ampos são obrigatórios!",
                [{text: onkeydown, onPress: () => console.log("Ok Pressionado")}],
                {cancelable: false}
            );
        }
    }

    componentDidMount(){
        this._loadFontsAsync();
    }

    render(){
        if(this.state.fontsLoaded) {
            let preview_images = {
                image_1: require("../assets/image_1.jpg"),
                image_2: require("../assets/image_2.jpg"),
                image_3: require("../assets/image_3.jpg"),
                image_4: require("../assets/image_4.jpg"),
                image_5: require("../assets/image_5.jpg"),
                image_6: require("../assets/image_6.jpg"),
                image_7: require("../assets/image_7.jpg"),
            };
            return (
                <View style={styles.container}>
                    <SafeAreaView style={styles.droidSafeArea}/>
                    <View style={styles.appTitle}>
                        <View style={styles.appIcon}>
                            <Image
                                source={require("../assets/logo.png")}
                                style={styles.iconImage}
                            ></Image>
                        </View>
                        <View style={styles.appTitleTextContainer}>
                            <Text style={styles.appTitleText}>Novo Post</Text>
                        </View>
                    </View>
                    <DropDownPicker
                        items={[
                            {label: "Image 1", value: "image_1"},
                            {label: "Image 2", value: "image_2"},
                            {label: "Image 3", value: "image_3"},
                            {label: "Image 4", value: "image_4"},
                            {label: "Image 5", value: "image_5"},
                            {label: "Image 6", value: "image_6"},
                            {label: "Image 7", value: "image_7"},
                        ]}
                        defaultValue={this.state.previewImage}
                            open={this.state.dropdownHeight == 170 ? true : false}
                        onOpen={() => {
                            this.setState({ dropdownHeight: 170 });
                        }}
                        onClose={() => {
                            this.setState({ dropdownHeight: 40 });
                        }}
                    />
                    <ScrollView>
                        <View>
                            <TextInput
                            style={styles.inputBox}
                            onChangeTExt = {(caption)=>{
                                this.setState({caption});
                            }}
                            placeholder = {"Legenda"}
                            placeholderTextColor = "black"
                            multiline = {true}
                            numberOfLInes = {10}
                            />
                        </View>
                    </ScrollView>
                    <TouchableOpacity style={
                            this.state.is_liked
                            ? styles.likeButtonLiked
                            : styles.likeButtonDisliked
                        }
                        onPress={() => this.addPost()}>
                            <Text>LIKE</Text>
                    </TouchableOpacity>
                </View>
            );
        }
    }

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#15193c",
    },
    droidSafeArea: {
      marginTop:
        Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35),
    },
    appTitle: {
      flex: 0.07,
      flexDirection: "row",
    },
    appIcon: {
      flex: 0.3,
      justifyContent: "center",
      alignItems: "center",
    },
    iconImage: {
      width: "100%",
      height: "100%",
      resizeMode: "contain",
    },
    appTitleTextContainer: {
      flex: 0.7,
      justifyContent: "center",
    },
    appTitleText: {
      color: "white",
      fontSize: RFValue(28),
      fontFamily: "Bubblegum-Sans",
    },
    fieldsContainer: {
      flex: 0.85,
    },
    previewImage: {
      width: "93%",
      height: RFValue(250),
      alignSelf: "center",
      borderRadius: RFValue(10),
      marginVertical: RFValue(10),
      resizeMode: "contain",
    },
    inputBox: {
      borderColor: "white",
      borderWidth: 1,
      marginTop: 20,
      height: 40,
      borderRadius: RFValue(5),
      fontFamily: "Bubblegum-Sans",
      color: "white"
    },  
    likeButtonLiked: {
        width: RFValue(160),
        height: RFValue(40),
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        backgroundColor: "#eb3948",
        borderRadius: RFValue(30)
      },
      likeButtonDisliked: {
        width: RFValue(160),
        height: RFValue(40),
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        borderColor: "#eb3948",
        borderWidth: 2,
        borderRadius: RFValue(30)
      },
  });