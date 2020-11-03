const ADD_POST ='ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SEND_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';

let store = {
    _callSubscriber() {
        console.log('No subscriber(observers)');
    },
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 15},
                {id: 2, message: 'Hi, can you see?', likesCount: 20}
            ],
            newPostText: 'IT-kamasutra'
        },
        dialogsPage: {
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
        },
        sidebar: {
            friends: [
                {id: 1, name: 'Andrew', avatar: "http://placekitten.com/40/20"},
                {id: 2, name: 'Sasha', avatar: "http://placekitten.com/40/40"},
                {id: 3, name: 'Sveta', avatar: "http://placekitten.com/40/30"}
            ]
        }
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: 4,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === SEND_MESSAGE) {
            //let time = action.time;
            let body = this._state.dialogsPage.newMessageBody;
            this._state.dialogsPage.newMessageBody = '';
            let date = new Date();
            let hours;
            let minutes;
            if (date.getHours() < 10){
                hours = "0" + date.getHours();
            } else {
                hours = date.getHours();
            }
            if (date.getMinutes() < 10){
                minutes = "0" + date.getMinutes();
            } else{
                minutes = date.getMinutes();
            }
            let time = hours + ":" + minutes;
            this._state.dialogsPage.messages.push({id: 3, message: body, time: time, my: true});
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.dialogsPage.newMessageBody = action.body;
            this._callSubscriber(this._state);
        }
    }
}

export const addPostActionCreator = () => ({type: ADD_POST}); // Возвращает обЪект
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});
export const addMessageActionCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageTextActionCreator = (text) => ({type: UPDATE_NEW_MESSAGE_BODY, body: text});

window.story = store;

export default store;
