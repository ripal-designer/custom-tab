import React, { useState } from "react";
import { TabContent } from "./TabContent";

function Accordion(){
const [activeAcc, setActiveAcc] = useState("1");

function handlerClick(itemId){
    setActiveAcc(itemId);
}
    return(
        <>
        <h1 className="text-center">Custom Accordion</h1>
        <div>
            {TabContent.map((item) => {

return (
<>
                <div id={item.id} className={activeAcc === item.id ? 'acc-title active' : 'acc-title'} onClick={() => handlerClick(item.id)}>{item.heading}</div>
                <div className={activeAcc === item.id ? 'acc-content active' : 'acc-content'} >{item.content}</div>
                </>

)
            })
            }
        </div>
        
        </>
    );
}

export default Accordion