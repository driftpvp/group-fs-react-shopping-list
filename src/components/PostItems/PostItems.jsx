import React, { useState } from "react";

function PostItems({addItem}){
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState("");
    const [unit, setUnit] = useState("");


const handleSubmit = (event) => {
    event.preventDefault();
 
    const newItem = {
        name:name,
        quantity:quantity,
        unit:unit
    }

    addItem(newItem);

            // clear inputs
            setName('')
            setQuantity('')
            setUnit('')
}

    return (
        <div>
            <h1>Item Form</h1>
            <form onSubmit={handleSubmit}> 
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