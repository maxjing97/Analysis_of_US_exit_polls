const express = require("express")
const router = express.Router()

router.get("/users", (req, res) => {
    data = "random message"
    res.send(data)
}) 

module.exports = router