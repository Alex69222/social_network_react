import profileReducer, { addPostActionCreator, deletePost } from "./profile-reducer";

let state = {
    posts: [
        { id: 1, message: "Hi! How are you?", likesCount: 5, },
        { id: 2, message: "It's my first props!", likesCount: 10, },
        { id: 3, message: "This is the second one.", likesCount: 12, },
        { id: 4, message: "Ok. Maby later", likesCount: 1, },

    ],

}

test('Length of posts should become five', () => {
    // 1. test data
    let action = addPostActionCreator('it-kamas');
    // 2. action
    let newState = profileReducer(state, action)

    // 3. expectation
    expect(newState.posts.length).toBe(5);
});

test('Message of new post should be correct', () => {
    // 1. test data
    let action = addPostActionCreator('it-kamas');
    // 2. action
    let newState = profileReducer(state, action)

    // 3. expectation
    expect(newState.posts[4].message).toBe('it-kamas');
});
test('after deleting length should be decremented', () => {
    // 1. test data
    let action = deletePost(1)
    // 2. action
    let newState = profileReducer(state, action)

    // 3. expectation
    expect(newState.posts.length).toBe(3);
});
test('after deleting length shouldnt be decremented if passed id is incorrect', () => {
    // 1. test data
    let action = deletePost(10000)
    // 2. action
    let newState = profileReducer(state, action)

    // 3. expectation
    expect(newState.posts.length).toBe(4);
});

