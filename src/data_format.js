//this file formats data for getting a election's data
import set_post_data from "./client";

//function to set selection tables
export default async function get_election_tables(election_name, area) {
    let return_string = ""
    //get all the elections that match these names and categories and save them in table format
    const categories = ["age_6","area type", "gender_2","race_5"] 
    //for each of these categories, find the path

    let current_object = {}
    let data = await set_post_data("data/2016_presidential_data/michigan_actual.json") //obtain the raw data here 
    return `<p>${JSON.stringify(data)}</p>`
}