import React from "react";
import Axios from "axios";

function Buttons ({getItems}){

    const resetItems = e =>{
        e.preventDefault();
        console.log("resetItems");
        Axios.put("/groceries/reset")
        .then(response => {
            getItems();
        })
        .catch((error) => {
            console.log(error);
          });
    }

    const clearItems = e =>{
        
        console.log("clearItems");
        Axios.put("/groceries/clear")
        .then(response => {
            getItems();
        })
        .catch((error) => {
            console.log(error);
        });
    }


    // windows alert confirm
const handleClear = () => {
    const clickConfirm = window.confirm('are you sure?');
    if (clickConfirm) {
        clearItems();
    }
}

    return (
        <div>
        <button onClick={resetItems}>Reset</button>
        <button onClick={handleClear}>Clear</button>
        </div>
    )
};
export default Buttons;