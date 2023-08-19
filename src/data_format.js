//this file formats data for getting a election's data
import set_post_data from "./client";

//function to set selection tables
export default async function get_election_tables(election_name, area) {
    let return_string = ""
    //get all the elections that match these names and categories and save them in table format
    const categories = ["age_6","area type", "gender_2","race_5","actual"] 
    //for each of these categories, find the path

    //loop through the categories and call the get function for each one to request from the server, calling the function to get the html for each
    let category = categories[0]
    let url = `data/${election_name}_data/${area}_${category}`
    let data = await set_post_data(url)
    let current_string = `<p>${JSON.stringify(data)}</p>`
    return_string += current_string

    //loop through the categories and call the get function for each one to request from the server, calling the function to get the html for each
    category = categories[1]
    url = `data/${election_name}_data/${area}_${category}`
    data = await set_post_data(url)
    current_string = `<p>${JSON.stringify(data)}</p>`
    return_string += current_string

    category = categories[2]
    url = `data/${election_name}_data/${area}_${category}`
    data = await set_post_data(url)
    current_string = `<p>${JSON.stringify(data)}</p>`
    return_string += current_string
    
    category = categories[3]
    url = `data/${election_name}_data/${area}_${category}`
    data = await set_post_data(url)
    current_string = `<p>${JSON.stringify(data)}</p>`
    return_string += current_string

    category = categories[4]
    url = `data/${election_name}_data/${area}_${category}`
    data = await set_post_data(url)
    current_string = `<p>${JSON.stringify(data)}</p>`
    return_string += current_string

    console.log("current output", return_string)
    return return_string
}




//this program converts a json list to html
function json_list_to_html_table(input) {

}