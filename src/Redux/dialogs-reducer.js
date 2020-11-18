const SEND_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';

let initialState = {
    dialogs: [
        {id: 1, name: 'Dimych', avatar: "http://placekitten.com/40/10"},
        {id: 2, name: 'Andrew', avatar: "http://placekitten.com/40/20"},
        {id: 3, name: 'Sveta', avatar: "http://placekitten.com/40/30"},
        {id: 4, name: 'Sasha', avatar: "http://placekitten.com/40/40"},
        {id: 5, name: 'Victor', avatar: "http://placekitten.com/40/50"},
        {id: 6, name: 'Valera', avatar: "http://placekitten.com/40/60"}
    ],
    messages: [
        {
            id: 1,
            message: 'Пандемия коронавируса привела к мировому экономическому кризису, отчего значительно упали цены на нефть, газ и другие природные ресурсы, в результате бюджет России недополучит в 2020 году несколько триллионов рублей. Кроме того, расходы на борьбу с пандемией и компенсации гражданам потребовали 4 триллиона рублей. В итоге убытки бюджета огромны. Их надо компенсировать.',
            time: '9:30',
            my: false
        },
        {id: 2, message: 'I\'m fine. Let\'s have a dinner today.', time: '9:35', my: true},
        {id: 3, message: 'What do you think about it?', time: '9:37', my: true}
    ],
    newMessageBody: ""
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY: {
            return {
                ...state,
                newMessageBody: action.body
            };
        }
        case SEND_MESSAGE: {
            let body = state.newMessageBody;
            let date = new Date();
            let hours;
            let minutes;
            if (date.getHours() < 10) {
                hours = "0" + date.getHours();
            } else {
                hours = date.getHours();
            }
            if (date.getMinutes() < 10) {
                minutes = "0" + date.getMinutes();
            } else {
                minutes = date.getMinutes();
            }
            let time = hours + ":" + minutes;
            return {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, {id: 3, message: body, time: time, my: true}]
            };
        }
        default:
            return state;
    }
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageBodyCreator = (text) => ({type: UPDATE_NEW_MESSAGE_BODY, body: text});

export default dialogsReducer;