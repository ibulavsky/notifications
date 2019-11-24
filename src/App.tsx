import React, {Component} from 'react' ;
import './App.css';
import Button from "./components/Button";
import Notification from "./components/Notification";
import {IStore} from "./redux/store";
import {
    deleteNotification, setNotification,
    IDeleteNotificationAction,
} from "./redux/actionsAndThunks";
import {connect} from "react-redux";

export interface IState {
    notifications: Array<INotification>
}

export interface INotification {
    id: number
    title: string
    type: NotificationType
}

interface IProps {
    notifications: Array<INotification>,
    // addNotification: (notification: INotification) => IAddNotificationAction
    // setNotification: (notification: INotification) => (dispatch: Dispatch) => any;
    setNotification: any; // здесь надо решить вопрос
    deleteNotification: (noteId: number) => IDeleteNotificationAction
}

export type NotificationType = "error" | "success" | "warning"

class App extends Component<IProps> {

    state: IState = {
        notifications: [],
    };

    //old function
    __addNotification = (title: string, type: NotificationType) => {
        const notification = {id: (new Date().getTime()), title, type};
        this.setState({
            notifications: [...this.state.notifications, notification]
        });
        setTimeout(() => {
            this.setState(
                {notifications: [...this.state.notifications.splice(1, this.state.notifications.length)]}
            )
        }, 3000)
    };

    showNotification = (title: string, type: NotificationType) => {
        const notification: INotification = {id: (new Date().getTime()), title, type};
        // this.props.addNotification(notification)
        this.props.setNotification(notification)
    };

    hideNotification = (noteId: number) => {
        this.props.deleteNotification(noteId)
    };


    render() {
        let Elements = this.props.notifications.map(n => <Notification hide={this.hideNotification} {...n}/>);
        return (
            <div className='App'>
                <div className='buttons'>
                    <Button name={'Success'} onClick={() => {
                        this.showNotification('YO! YO!', 'success')
                    }}/>
                    <Button name={'Warning'} onClick={() => {
                        this.showNotification('Attention', 'warning')
                    }}/>
                    <Button name={'Error'} onClick={() => this.showNotification('Ohh, sheet', 'error')}/>
                </div>
                <div className={'notifications'}>
                    {Elements}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (store: IStore) => ({
    notifications: store.notifications.notifications
});

export default connect(mapStateToProps, {setNotification, deleteNotification})(App);
