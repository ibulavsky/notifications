import React, {Component} from 'react' ;
import './App.css';
import Button from "./components/Button";
import Notification from "./components/Notification";

interface IState {
    notifications: Array<INotification>
}

interface INotification {
    id: Number
    title: String
    type: NotificationType
}

export type NotificationType = "error" | "success" | "warning"

class App extends Component {

    state: IState = {
        notifications: []
    };

    addNotification = (title: String, type: NotificationType) => {
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

    render() {
        let Elements = this.state.notifications.map(n => <Notification title={n.title} type={n.type} key={+n.id}/>);
        return (
            <div className='App'>
                <div className='buttons'>
                <Button name={'Success'} onClick={() => {
                    this.addNotification('YO! YO!', 'success')
                }}/>
                <Button name={'Warning'} onClick={() => {
                    this.addNotification('Attention', 'warning')
                }}/>
                <Button name={'Error'} onClick={() => this.addNotification('Ohh, sheet', 'error')}/>
                </div>
                <div className={'notifications'}>
                    {Elements}
                </div>
            </div>
        );
    }
}

export default App;
