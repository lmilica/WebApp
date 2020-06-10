import React from "react";

export const Grid = props => {
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


