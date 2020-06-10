import React from 'react';
import { Post } from './Post';


class News extends React.Component {
    constructor(props) {
        super(props)
        this.state = { postIds: [] }


    }

    render() {
        return (
            <ul>
                {
                    this.state.postIds.map(postId => { return <Post id={postId} /> })
                }
            </ul>
        )
    }

    componentDidMount() {
        fetch('https://hacker-news.firebaseio.com/v0/topstories.json')
            .then(res => res.json())
            .then(data => {
                this.setState({ postIds: data });
            });
    }

}


export { News }