import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

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
        <TextField
          inputProps={{
            style: { background: "lightblue" },
          }}
          type="text"
          id="name"
          value={name}
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          inputProps={{
            style: { background: "lightblue" },
          }}
          type="text"
          id="quantity"
          value={quantity}
          placeholder="Quantity"
          onChange={(e) => setQuantity(e.target.value)}
        />
        <TextField
          inputProps={{
            style: { background: "lightblue" },
          }}
          type="text"
          id="unit"
          value={unit}
          placeholder="Unit"
          onChange={(e) => setUnit(e.target.value)}
        />
        <Button
          style={{
            backgroundColor: "#000000",
            color: "#00fcff",
            fontSize: "16px",
            margin: "4px",
            alignItems: "center",
          }}
          type="submit"
        >
          Add Item
        </Button>
      </form>
    </div>
  );
}

export default PostItems;
