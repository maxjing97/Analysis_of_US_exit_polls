const express = require("express")
const router = express.Router()

const data_path_start = "./../data/" //this is the start of the data path
let data_path_end = "2016_presidential_data/national_actual.json"

//variable path 
router.get("/user", (req, res) => {
    var data = "random message"
    res.send(data)

    res.status(400).send("invalid url given")
}) 

// set the local data_name variable to be something
router.post("/set", (req, res) => {
    const path = "./../" +  req.body.data_path
    try {
        const json_file = require(path);
        res.json(json_file);
    } catch (error){
        res.status(400).send("invalid url given")
    }
    
}) 

module.exports = router