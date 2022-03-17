const express = require("express");
const router = express.Router();

router.post("/lav", (req, res) =>{
    res.status(200).send(true);
});

module.exports = router;