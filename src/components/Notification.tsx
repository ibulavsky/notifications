import React from 'react';
import '../App.css';
import {NotificationType} from "../App";

interface IProps {
    type: NotificationType
    id: number
    title: string
    hide: (noteId: number) => void
}

const Notification = (props: IProps) => {
    let styles = 'notification ' + props.type;
    return (
        <span key={props.id} className={styles}>
            {props.title}
            <span className={'hideButton'}
                onClick={() => {props.hide(+props.id)
            }}>X</span>
       </span>
    );
};

export default Notification;
