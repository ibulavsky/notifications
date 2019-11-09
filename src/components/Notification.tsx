import React from 'react';
import '../App.css';
import {NotificationType} from "../App";

interface IProps {
    type: NotificationType
    key: Number
    title: String
}

const Notification = (props: IProps) => {
    let styles = 'notification ' + props.type;
    debugger
    return (
        <span className={styles}>
            {props.title}
       </span>
    );
};

export default Notification;
