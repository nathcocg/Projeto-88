import { Image } from "react-native-paper/lib/typescript/components/Avatar/Avatar";
import { Text } from "react-native-paper";
import { FlatList } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native";
import { TouchableOpacity } from "react-native";

import TabNavigator from "../navigation/TabNavigator";
import PostCard from "../screens/PostCard";
import PostScreen from "../screens/PostScreen";



fetchUser = () => {
    let theme;
    firebase
      .database()
      .ref("/posts/" + firebase.auth().posts)
      .on("value", snapshot => {
        theme = snapshot.val().current_theme;
        this.setState({ light_theme: theme === "light" });
      });
}; 

export default class Feed extends Component {
    constructor(props) {
        super(props);
        this.state = {
          fontsLoaded: false,
          light_theme: true,
          posts: this.props.post
        };
      }
    render(){
        return(
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
                        <Text style={styles.appTitleText}>Espectagrama</Text>
                    </View>
                </View>
                <View style={styles.cardContainer}>
                    <FlatList
                        keyExtractor={this.keyExtractor}
                        data={posts}
                        renderItem={this.renderItem.PostCard}   
                    />
                </View>
                <TouchableOpacity
                    onPress = {()=>
                        this.initiateTTS(
                            this.props.route.params.post,
                            this.props.route.params.author
                        )
                    }
                ></TouchableOpacity>
            </View>
        );
    }
}