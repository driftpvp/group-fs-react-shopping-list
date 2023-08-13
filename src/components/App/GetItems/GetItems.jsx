import React, { useState , useEffect } from "react";
import axios from "axios";

function GetItems() {
    let [itemList, setItemList] = useState([]);
    // let [itemName, setItemName] = useState('');
    // let [itemQuantity, setItemQuantitiy] = useState(0);
    // let [itemUnit, setItemUnit] = useState('');
    // let [itemPurchased, setItemPurchased] = useState(true);

    const getItems = () => {
        axios  
            .get('/groceries')
            .then((response) => { // TODO test res
                console.log(response.date);
                setItemList(response.data)
            })
            .catch((error) => {
                console.log(error);
            })
    }

    useEffect(() => {
        getItems()
    }, [])

    return (
        <div>
            {itemList.map(item => (
                <div key={item.name}>
                    {item.name}
                    {item.quantity} {item.unit}
                </div>
            ))}
        </div>

    )
}

export default GetItems;