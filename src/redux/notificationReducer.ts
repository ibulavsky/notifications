import {IState} from "../App";
import {IAddNotificationAction, IDeleteNotificationAction} from "./actionsAndThunks";

export const ADD_NOTIFICATION = 'NOTIFICATION-APP/ADD-NOTIFICATION';
export const DELETE_NOTIFICATION = 'NOTIFICATION-APP/DELETE-NOTIFICATION';

const initialState = {
    notifications: [],
};

const notificationReducer = (state: IState = initialState, action: (IAddNotificationAction & IDeleteNotificationAction)): IState => {
    switch (action.type) {
        case ADD_NOTIFICATION:
            return {
                ...state,
                notifications: [...state.notifications, action.notification],
            };
        case DELETE_NOTIFICATION:
            return {
                ...state,
                notifications: [...state.notifications.filter(n => {
                    if (n.id !== action.noteId) {
                        return true
                    } else {
                        return false
                    }
                })],
            };
        default:
            return state
    }
};
export default notificationReducer;
