const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// GET

router.get('/', (req, res) => {
    console.log("In GET request");
    let queryText = 'SELECT * from "items"';

    pool.query(queryText).then((result) => {
        res.send(result.rows);
    }).catch((err) => {
        console.log(err);
        res.sendStatus(500);
    })
});



// POST
router.post("/", (req, res) => {
    console.log("POST /groceries");
    const newGrocery = req.body;
    const queryText = ` INSERT INTO "items" ("name", "quantity", "unit", "purchased") 
                        VALUES ($1, $2, $3, $4);`;
    pool.query(queryText, [newGrocery.name, newGrocery.quantity, newGrocery.unit, false])
    .then(result => {
        console.log("Grocery item added");
        res.sendStatus(201);
    })
    .catch(error => {
        console.log("Error adding new grocery item", error);
        res.sendStatus(500);
    });
});



// PUT




//DELETE




module.exports = router;