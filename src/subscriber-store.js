import { configureStore } from '@reduxjs/toolkit';

const initialState = {
    "subscribers" : [{
        "id": 1,
        "name": "Alice Smith",
        "phone": 1234567890
    },
    {
        "id": 2,
        "name": "Bob Johnson",
        "phone": 2345678901
    },
    {
        "id": 3,
        "name": "Charlie Brown",
        "phone": 3456789012
    },
    {
        "id": 4,
        "name": "Diana Prince",
        "phone": 4567890123
    },
    {
        "id": 5,
        "name": "Ethan Hunt",
        "phone": 5678901234
    },
    {
        "id": 6,
        "name": "Fiona Glenanne",
        "phone": 6789012345
    }]
};

function subscriberReducer(state = initialState, action) {

    switch(action.type) {
        case  "SET_SUBSCRIBERS":
            return {...state, "subscribers" : action.payload}  
        default:
            return state;
    }
}

export default configureStore({
    reducer: {
        subscribers: subscriberReducer
        // Add more reducers here if needed
    }
});
