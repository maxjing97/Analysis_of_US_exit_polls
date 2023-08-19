//this file formats data for getting a election's data
import set_post_data from "./client";

//function to set selection tables
export default function get_election_tables(election_name, area) {
    const modify = document.getElementById("content")
    let return_string = ""
    //get all the elections that match these names and categories and save them in table format
    const categories = ["age_6","area type", "gender_2","race_5"] 
    //for each of these categories, find the path

    let current_object = {}
    set_post_data("data/2016_presidential_data/michigan_actual.json").then( response => {
        const value = response
        console.log("current object", value)
        console.log("accesing:", value[0]["Clinton"])

        return_string = "<h1>" + value[0]["Clinton"] + "</h1>" 
        modify.innerHTML = return_string
    })
    
    return "none"
}