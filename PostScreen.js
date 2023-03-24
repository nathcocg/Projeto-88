import React from "react";
import PostCard from "./PostCard";

export default class PostScreen extends Component {
    renderItem = ({item: post}) => {
        return <PostCard post={post} navigation={this.props.navigation}/>
    };
}