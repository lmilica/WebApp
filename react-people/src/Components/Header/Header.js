import React from "react";
import './Header.css';
import { FaRedo } from "react-icons/fa";
import { FaGripHorizontal } from "react-icons/fa";


export const Header = () => {
    return (
        <div className='header'>
            <FaRedo />
            <FaGripHorizontal />
            <h3 className='h3'>BIT People</h3>



        </div>
    )
}