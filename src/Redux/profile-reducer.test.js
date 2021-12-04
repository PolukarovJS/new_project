import profileReducer, { addPostActionCreator, deletePost } from './profile-reducer';
let state = {
   posts: [
      { id: 1, message: 'Hi, how are you?', likesCount: 15 },
      { id: 2, message: 'Hi, can you see?', likesCount: 20 },
   ],
};
it('length of posts should be increment', () => {
   // 1. Test data
   let action = addPostActionCreator('it-kamasutra.com');
   // 2. Action
   let newState = profileReducer(state, action);
   // 3. Expectation
   expect(newState.posts.length).toBe(3);
});

it('message of post should be correct', () => {
   // 1. Test data
   let action = addPostActionCreator('it-kamasutra.com');
   // 2. Action
   let newState = profileReducer(state, action);
   // 3. Expectation
   expect(newState.posts[2].message).toBe('it-kamasutra.com');
});

test('after deleting should be decrement', () => {
   // 1. Test data
   let action = deletePost(1);
   // 2. Action
   let newState = profileReducer(state, action);
   // 3. Expectation
   expect(newState.posts.length).toBe(1);
});

test("after deleting shouldn't be decrement if id is incorrect", () => {
   // 1. Test data
   let action = deletePost(1000);
   // 2. Action
   let newState = profileReducer(state, action);
   // 3. Expectation
   expect(newState.posts.length).toBe(2);
});
