import React, { Component, useCallback, useMemo, useReducer, useState } from "react";
import AddSubscriber from "./AddSubscriber.js";
import ShowSubscribers from "./ShowSubscribers.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SubscriberCountContext } from "./subscriberCountContext.js";
import Footer from "./footer.js";
import { useEffect } from "react";
import { TotalSubscriberReducer } from "./TotalSubscriberReducer.js";
import { useDispatch, useSelector } from "react-redux";


export default function PhoneDirectory() {
    const subscribersListredux = useSelector(state => state.subscribers)

    const [subscribersList, setSubscriberList] = useState([{
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
    }]);
    const [state, dispatchToTotalSubscriber] = useReducer(TotalSubscriberReducer, { count: subscribersList.length })
    const dispatch = useDispatch();

    // async function loadData() {
    //     console.log("loadData function is rendering");

    //     const response = await fetch("http://localhost:7081/contacts")
    //     const result = await response.json()
    //     dispatch({ "type": "SET_SUBSCRIBERS", payload:result })
    //     dispatchToTotalSubscriber({ "type": "UPDATE_COUNT", payload:result.length })
    //     setSubscriberList(result);
    // }

    // useEffect(() => {
    //     loadData();
    // }, []);


    async function addSubscriberHandler(newSubscriber) {
        const updatedSubscribersList = [...subscribersList];
        if (updatedSubscribersList.length > 0) {
            newSubscriber.id = updatedSubscribersList[updatedSubscribersList.length - 1].id + 1;
        } else {
            newSubscriber.id = 1;
        }
        updatedSubscribersList.push(newSubscriber);
        
        setSubscriberList(updatedSubscribersList); 
        
        dispatch({
            type: 'SET_SUBSCRIBERS',
            payload: updatedSubscribersList 
        });
        
        dispatchToTotalSubscriber({
            "type": "UPDATE_COUNT",
            payload: updatedSubscribersList.length // Correctly update count
        });
    }
    

    // delete subscriber using useCallback

    const deleteSubscriberHandler = useCallback((subscriberId) => {
        const updatedSubscribers = subscribersList.filter(subscriber => subscriber.id !== subscriberId);
        setSubscriberList(updatedSubscribers); 
        dispatch({
            type: 'SET_SUBSCRIBERS',
            payload: updatedSubscribers // Use the new list here
        });
    
        dispatchToTotalSubscriber({
            "type": "UPDATE_COUNT",
            payload: updatedSubscribers.length // Correctly update count
        });
    }, [subscribersList]);
    




    return (
        <div>
            <Router>
                <Routes>
                    <Route exact path='/' element={<ShowSubscribers deleteSubscriberHandler={(subscriberId) => deleteSubscriberHandler(subscriberId)} />} />
                    <Route exact path='/add' element={<AddSubscriber addSubscriberHandler={(newSubscriber) => addSubscriberHandler(newSubscriber)} />} />
                </Routes>
            </Router>
            <SubscriberCountContext.Provider value={state.count} >
                <Footer></Footer>
            </SubscriberCountContext.Provider>
        </div>

    );
}

// class PhoneDirectory extends Component {
//     constructor() {
//         super();
//         this.state = {
//             subscribersList: [

//             ]
//         }
//     }

//     addSubscriberHandler = (newSubscriber) => {
//         console.log("phonedirectory");
//         let subscribersList = this.state.subscribersList;
//         if (subscribersList.length > 0) {
//             newSubscriber.id = subscribersList[subscribersList.length - 1].id + 1;
//         }
//         else {
//             newSubscriber.id = 1;
//         }
//         subscribersList.push(newSubscriber);
//         this.setState({ subscribersList: subscribersList });
//         console.log("phonedirectory0");
//         console.log(this.state.subscribersList);
//     }

//     deleteSubscriberHandler = (subscriberId) => {
//         let subscriberList = this.state.subscribersList;
//         let subscriberIndex = 0;
//         subscriberList.forEach(function (subscriber, index) {
//             if (subscriber.id == subscriberId) {
//                 subscriberIndex = index;
//             }
//         }, this)
//         let newSubscriberList = subscriberList;
//         newSubscriberList.splice(subscriberIndex, 1);
//         this.setState({ subscriber: newSubscriberList });
//     }

//     render() {
//         return (
//             <div>
//                 <Router>
//                     <Routes>
//                         <Route exact path='/' element={<ShowSubscribers subscribersList={this.state.subscribersList} deleteSubscriberHandler={this.deleteSubscriberHandler} />} />
//                         <Route exact path='/add' element={<AddSubscriber addSubscriberHandler={this.addSubscriberHandler} />} />
//                     </Routes>
//                 </Router>
//             </div>

//         );
//     }
// }

// export default PhoneDirectory;
