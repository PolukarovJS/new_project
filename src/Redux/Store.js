import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

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
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        this._callSubscriber(this._state);
    }
}

window.story = store;

export default store;
