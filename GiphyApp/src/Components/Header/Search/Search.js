import React from 'react';
import './Search.css'

export class Search extends React.Component {
    constructor(props) {
        super(props)
        this.state = ({ gifs: [] })
        this.getEndpoint = this.getEndpoint.bind(this)
    }
    getEndpoint = (event) => {
        if (event.charCode === 13) {
            const $input = event.target
            const url = `https://api.giphy.com/v1/gifs/search?api_key=MruAMnefIKWjfVytQFCQOoeLz5nXVajN&q=~${$input.value}`;
            fetch(url)
                .then(res => res.json())
                .then(res => this.setState({ gifs: res.data }))

        }

    }

    render() {
        return (
            <div className="Search__main">
                <h2 className="Search__h2">Search Giphy</h2>
                <input className="Search__input" placeholder="Search" type='search' onKeyPress={this.getEndpoint} />
                <div className="Search__list">
                    {this.state.gifs.map((item, i) => <img className="img" src={item.images.preview_gif.url} alt="gif"></img>)}
                </div>
            </div>

        )
    }
}
