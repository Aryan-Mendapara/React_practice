const initialState = {
    count: 0,
}

export const CountReducer = (state = initialState , action) => {
    switch (action.type) {
        case 'INCREMENT':
            state.count + 1;
            break;
        case 'DECREMENT':
            state.count - 1;
            break;
        default: 0
            break;
    }
}