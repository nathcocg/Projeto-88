import React from "react";
import { Image } from "react-native-paper/lib/typescript/components/Avatar/Avatar";
import { Text } from "react-native-paper";
import { RFValue } from "react-native-responsive-fontsize";

export default class PostCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
          fontsLoaded: false,
          light_theme: true,
          post_id: this.props.post.key,
          post_data: this.porps.post.value
        };
    }
    render(){
        return(
            <View style={styles.container}>
                <View style = {styles.cardContainer}>
                    <View style={styles.authorContainer}>
                        <View style={styles.authorImageContainer}>
                            <Image
                                source={require("../assets/profile_img.png")}
                                style={styles.profileImage}
                            ></Image>
                        </View>
                        <View style={styles.authorNameContainer}>
                            <Text style={styles.authorNameText}>{this.props.post.author}</Text>
                        </View>
                    </View>
                    <Image source={require("../assets/post.jpeg")} style={styles.postImage}/>
                    <View style={styles.captionContainer}>
                        <Text style={styles.captionText}>
                            {this.props.post.caption}
                        </Text>
                    </View>
                    <View style={styles.actionContainer}>
                        <View style={styles.likeButton}>
                            <Ionicons nam={"heart"} size={RFValue(30)} color={"white"}/>
                            <Text style={styles.likeText}>12k</Text>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}