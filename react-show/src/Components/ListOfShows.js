import React from 'react';

const Show = props => {

    const { name, img } = props;

    return (
        <div className='show'>
            <img src={img} alt={name} />
            <h3>{name}</h3>
        </div>
    )


}

class ListOfShows extends React.Component {
    constructor(props) {
        super(props);


        this.state = {
            showList: []
        };
    }

    componentDidMount() {
        fetch('http://api.tvmaze.com/shows')
            .then(res => res.json())
            .then(data => {
                this.setState({ showList: data });
            });
    }

    render() {
        return (
            <div>
                {
                    this.state.showList.map(show => {
                        return <Show key={show.id} name={show.name} img={show.image.medium} />
                    })
                }
            </div>
        )
    }
}

export { ListOfShows }