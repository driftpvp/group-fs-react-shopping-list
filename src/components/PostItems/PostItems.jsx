import React, { useState } from "react";
import Axios from "axios";

function PostItems(){
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState("");
    const [unit, setUnit] = useState("");

    const addItem = e => {
        e.preventDefault();

        setName("")
        setQuantity("")
        setUnit("")

        Axios.post("/groceries", {
            name,
            quantity,
            unit,
        })
        .then(response =>{
        })
        .catch(error =>{
            console.log(error);
        })
    };

    return (
        <div>
            <h1>Item Form</h1>

            <form onSubmit={e => {
                addItem(e);
            }}>
            <input
            type="text"
            id="name"
            value={name}
            placeholder="Name"
            onChange={e => setName(e.target.value)}
            />
            <input
            type="text"
            id="quantity"
            value={quantity}
            placeholder="Quantity"
            onChange={e => setQuantity(e.target.value)}
            />
            <input
            type="text"
            id="unit"
            value={unit}
            placeholder="Unit"
            onChange={e => setUnit(e.target.value)}
            />
            <button type="submit">Add Item</button>
        </form>
        </div>
    )
}

export default PostItems;