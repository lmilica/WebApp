import React from 'react';



class Post extends React.Component {
    constructor(props) {

        super(props)
        this.state = {
            title: ''

        }
    }

    render() {
        return (
            <div>
                {
                    this.state.title
                }
            </div>
        )
    }


    componentDidMount() {
        fetch(`https://hacker-news.firebaseio.com/v0/item/${this.props.id}.json?print=pretty`)
            .then(res => res.json())
            .then(post => {
                console.log(post);

                this.setState({ title: post.title })
            });
    }

}



export { Post }