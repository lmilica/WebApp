import React from "react";
import SharedData from "../Shared/SharedData";
import Post from '../Entities/Post';

const FetchPost = () => {
fetch(SharedData.urlPosts)
.then(response => response.json())
.then(apiPosts=> {
    const post = apiPosts
})
}
