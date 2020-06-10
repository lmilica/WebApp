import React from "react";
import './ListUser.css';


export const ListUser = props => {

    const { name, img, email, last, date } = props;

    return (
        <div className='Main'>

            <div className='Images'><img src={img} alt={name} /></div>
            <div className='Text'><p>{name} {last}</p>
                <p>{email}</p>
                <p>{date}</p> </div>
        </div>
    )
}



