export function TotalSubscriberReducer(state, action) {

    switch(action.type) {
        case "UPDATE_COUNT":
            const updatedcount = action.payload;
            return {...state, count :updatedcount};
    }
    return state;
}