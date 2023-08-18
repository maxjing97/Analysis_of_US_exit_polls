const express = require("express")
const router = express.Router()

router.get("/users", (req, res) => {
    var data = "random message"
    res.send(data)
}) 

module.exports = router