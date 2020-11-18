const ADD_FRIEND = 'ADD-FRIEND';

let initialState = {
    friends: [
        {id: 1, name: 'Andrew', avatar: "http://placekitten.com/40/20"},
        {id: 2, name: 'Sasha', avatar: "http://placekitten.com/40/40"},
        {id: 3, name: 'Sveta', avatar: "http://placekitten.com/40/30"}
    ]
};

const sidebarReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FRIEND:
            let newFriend = {
                id: 4,
                name: 'Pety',
                avatar: "http://placekitten.com/40/30"
            };
            state.friends.push(newFriend);
            return state;
        default:
            return state;
    }
}

export const addFriendCreator = () => ({type: ADD_FRIEND});

export default sidebarReducer;