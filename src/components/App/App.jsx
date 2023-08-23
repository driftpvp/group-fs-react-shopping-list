import React, { useState , useEffect } from "react";
import axios from "axios";

import Header from '../Header/Header.jsx'
import GetItems from '../GetItems/GetItems.jsx';
import PostItems from '../PostItems/PostItems.jsx';
import Buttons from "../Buttons/Buttons.jsx";
import './App.css';

function App() {
    let [itemList, setItemList] = useState([]);

    const getItems = () => {
        axios  
            .get('/groceries')
            .then((response) => { 
                console.log(response.data);
                setItemList(response.data);
            })
            .catch((error) => {
                console.log(error);
            })
    }

    const addItem = (newItem) => {
        axios.post("/groceries", {
            name:newItem.name,
            quantity:newItem.quantity,
            unit:newItem.unit
        })
        .then(response =>{
            console.log(response);
            getItems();
        })
        .catch(error =>{
            console.log(error);
        })
    };

    // toggle

    const toggleItem = (id) => {
        axios
        .put(`/groceries/toggle/${id}`)
        .then((response) => {
            console.log(response);
            getItems();
        })
        .catch((error) => {
            console.log(error);
        })
    }

    useEffect(() => {
        getItems()
    }, [])


    // Remove function
    const removeItem = (id) => {
        axios.delete(`/groceries/${id}`)
          .then((response) => {
            getItems();
          })
          .catch(error => {
            console.log(error);
          });
      };



    return (
        <div className="App">
            <Header />
            <main>
                <PostItems addItem={addItem}/>
                <Buttons getItems={getItems} />
                <br></br>
                <GetItems list={itemList} toggleItem={toggleItem} removeItem={removeItem}/>

            </main>
        </div>
    );
}

export default App;
