const ADD_FRIEND = 'ADD-FRIEND';

type FriendType = {
    id: number
    name: string
    avatar: string
}
let initialState = {
    friends: [
        {id: 1, name: 'Andrew', avatar: "http://placekitten.com/40/20"},
        {id: 2, name: 'Sasha', avatar: "http://placekitten.com/40/40"},
        {id: 3, name: 'Sveta', avatar: "http://placekitten.com/40/30"}
    ] as Array<FriendType>
};

export type InitialStatetype = typeof initialState

const sidebarReducer = (state = initialState, action:any): InitialStatetype => {
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

type AddFriendCreatorActionType = {
    type: typeof ADD_FRIEND
}
export const addFriendCreator = ():AddFriendCreatorActionType => ({type: ADD_FRIEND});

export default sidebarReducer;