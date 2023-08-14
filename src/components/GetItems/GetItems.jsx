import React, { useState , useEffect } from "react";
import axios from "axios";
import './GetItems.css';

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
                setItemList(response.data);
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
                <div key={item.name} className="item-container">
                    <div className="item-info">
                        <p>{item.name}</p>
                        <p>
                            {item.quantity} {item.unit}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default GetItems;