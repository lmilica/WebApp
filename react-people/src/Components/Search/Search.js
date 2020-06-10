import React from "react";

class Search extends React.Component {

    constructor() {
        super();

        this.state = {
            inputValue: ""
        }
    }

    filterData = () => {

        const filteredUsers = this.props.list.filter(item => {
            return (
                item.name.first.toLowerCase().includes(this.state.inputValue.toLowerCase()) ||
                item.name.last.toLowerCase().includes(this.state.inputValue.toLowerCase())
            )
        })

        this.props.onFilter(filteredUsers)
    }

    onSearch = (e) => {
        this.setState({ inputValue: e.target.value }, () => this.filterData())
    }

    render() {
        return (
            <input type="text"
                value={this.state.inputValue}
                onChange={this.onSearch} />
        )
    }
}

export { Search }