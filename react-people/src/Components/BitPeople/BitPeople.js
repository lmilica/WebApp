import React from "react";
import './BitPeople.css';
import { ListUser } from '../User/ListUser';
import { Grid } from '../Grid/Grid';
import { FaEnvelope } from "react-icons/fa";


export class BitPeople extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            grid: false,
        }
    }

    render() {
        return (<div>
            {
                this.props.list.map(user => {
                    if (this.state.grid) {
                        return <Grid
                            key={user.login.md5}
                            img={user.picture.large}
                            name={user.name.first}
                            last={user.name.last}

                            email={user.email}
                            date={user.registered.date}
                        />
                    } else {
                        return <ListUser
                            key={user.login.md5}
                            img={user.picture.large}
                            name={user.name.first}
                            last={user.name.last}
                            email={user.email}
                            date={user.registered.date}
                        />
                    }
                })
            }
        </div>
        )
    }
}
