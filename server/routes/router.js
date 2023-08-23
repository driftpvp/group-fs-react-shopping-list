const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// GET

router.get('/', (req, res) => {
    console.log("In GET request");
    let queryText = 'SELECT * from "items" ORDER BY "name" ASC';

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
router.put('/toggle/:id', (req, res) => {
    let { id } = req.params;
    const sqlText = `UPDATE "items" SET "purchased" = NOT "purchased" WHERE "id" = $1;`;
    pool.query(sqlText, [id])
        .then((result) => {
            console.log(`Returned from database`, result);
            res.sendStatus(201);
        })
        .catch((err) => {
            console.log(`Error updating the database ${sqlText}`, err);
            res.sendStatus(500)
        })
})



// DELETE

router.delete("/:id" , (req, res) => {
    // let { id } = req.params;
    console.log("DELETE /groceries/:id");
    const queryText = `DELETE FROM "items" WHERE "id" = $1;`;
    pool
      .query(queryText, [req.params.id])
      .then((response) => {
        console.log("Grocery items deleted", response);
        res.sendStatus(200);
      })
      .catch((error) => {
        console.log("Error deleting grocery items", error);
        res.sendStatus(500);
      });
  });

  // PUT - Reset All

  router.put("/reset/", (req, res) => {
    console.log("PUT /groceries/reset purchased status");
    const queryText = `UPDATE "items" SET "purchased" = FALSE;`;
    pool.query(queryText)
    .then(result => {
        console.log("Purchased status reset");
        res.sendStatus(200);
    })
    .catch(error => {
        console.log("Error resetting purchased status", error);
        res.sendStatus(500);
      });
  })


  // DELETE - ALL

  router.put("/clear/", (req, res) => {
    console.log("DELETE /groceries/clear");
    const queryText = `DELETE FROM "items";`;
    pool
      .query(queryText)
      .then(result => {
        console.log("Grocery items deleted");
        res.sendStatus(200);
      })
      .catch(error => {
        console.log("Error deleting grocery items", error);
        res.sendStatus(500);
      });
  });



module.exports = router;