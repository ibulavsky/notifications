import React from 'react';
import '../App.css'

interface IProps {
    name: string,
    onClick?: () => void,
}

const Button = (props: IProps) => {
    return (
        <button className='button' onClick={props.onClick}>{props.name}</button>
    );
};

export default Button;
