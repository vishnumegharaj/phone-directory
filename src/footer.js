import { useContext } from "react";
import { SubscriberCountContext } from "./subscriberCountContext.js";

 function Footer() {
    const count = useContext(SubscriberCountContext);
    return <h3 style={{marginLeft: '5%'}}> number of subscriber : {count} </h3>
}

export default Footer;
