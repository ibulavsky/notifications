import {ADD_NOTIFICATION, DELETE_NOTIFICATION} from "./notificationReducer";
import {INotification} from "../App";
import {Dispatch} from "redux";

export interface IDeleteNotificationAction {
    type: string,
    noteId: number
}

export interface IAddNotificationAction {
    type: string,
    notification: INotification
}

// actions
export const addNotification = (notification: INotification) => ({type: ADD_NOTIFICATION, notification});
export const deleteNotification = (noteId: number) => ({type: DELETE_NOTIFICATION, noteId});

// thunks
// export const setNotification

export const setNotification = (notification: INotification) => (dispatch: Dispatch) => {
    dispatch(addNotification(notification));
    setTimeout(() => dispatch(deleteNotification(notification.id)), 3000)
};
