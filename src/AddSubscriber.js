import React, { Component, useState } from "react";
import Header from './Header.js';
import "./AddSubscriber.css";
import { Link, useNavigate } from "react-router-dom";

function AddSubscriber(props) {

    const navigate = useNavigate();
    const [addSubscriberForm,  setAddSubscriberForm] = useState( {
        id : 0,
        name : '',
        phone : '' 
    });

function inputChangeHandler  (e) {
    const state = addSubscriberForm;
    state[e.target.name] = e.target.value;
    setAddSubscriberForm({...state});
}

function onFormSubmitted  (e) {
    e.preventDefault();
    props.addSubscriberHandler(addSubscriberForm);
    navigate('/');
}


    return (
        <>
            <Header heading="Add Subscriber" />
            <div className="container">
              <Link to="/" > <button className="back-btn">Back</button> </Link>  
                <form className="addSubscriber-form" onSubmit={onFormSubmitted} >
                    <label htmlFor="name" className="label-control">Name: </label><br />
                    <input id="name" type="text" className="input-control" name="name" onChange={inputChangeHandler} /><br /><br />
                    <label htmlFor="phone" className="label-control">Phone: </label><br />
                    <input id="phone" type="text" className="input-control" name="phone" onChange={inputChangeHandler} /><br /><br />

                    <div className="subscriber-info-container">
                        <span className="subscriber-to-add-heading">Subscriber to be added: </span><br />
                        <span className="subscriber-info">Name: {addSubscriberForm.name}</span><br />
                        <span className="subscriber-info">Phone:{addSubscriberForm.phone} </span><br />
                    </div>
                    
                    
                        <button type="submit" className="custom-add-btn add-btn"  >Add</button> 
                    
                </form>
            </div>
        </>
    );
}



export default AddSubscriber;




// import React from "react";
// import Header from './Header';
// import "./AddSubscriber.css";

// function AddSubscriber() {
//     return (
//         <>
//             <Header heading="Add Subscriber" />
//             <div className="container">

//                 <button className="back-btn" > Back</button>
//                 <form className="addSubscriber-form">
//                     <label htmlFor="name" className="label-control">Name: </label><br />
//                     <input id="name" type="text" className="input-control" name="name" /><br /><br />
//                     <label htmlFor="phone" className="label-control">Phone: </label><br />
//                     <input id="phone" type="text" className="input-control" name="phone" /><br /><br />

//                     <div className="subscriber-info-container">
//                         <span className="subscriber-to-add-heading">Subscriber to be added: </span><br />
//                         <span className="subscriber-info">Name: </span><br />
//                         <span className="subscriber-info">Phone: </span><br />
//                     </div>
                    
//                     <button type="submit" className="custom-add-btn add-btn">Add</button>
//                 </form>
//             </div>
//         </>


//     );
// }

// export default AddSubscriber;

