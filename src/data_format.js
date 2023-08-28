//this file formats data for getting a election's data
import set_post_data from "./client";

//function to set selection tables
export default async function get_election_tables(election_name, area) {
    let return_string = ""
    //get all the elections that match these names and categories and save them in table format
    const categories = ["age_6","area type_3", "gender_2","race_5","actual"] 
    //for each of these categories, find the path

    //loop through the categories and call the get function for each one to request from the server, calling the function to get the html for each
    let category = categories[0]
    let url = `data/${election_name}_data/${area}_${category}`
    let data = await set_post_data(url)
    let current_string = json_list_to_html_table(JSON.stringify(data), "Votes by age group")
    return_string += current_string

    //loop through the categories and call the get function for each one to request from the server, calling the function to get the html for each
    category = categories[1]
    url = `data/${election_name}_data/${area}_${category}`
    data = await set_post_data(url)
    current_string = json_list_to_html_table(JSON.stringify(data), "Votes by area type")
    return_string += current_string

    category = categories[2]
    url = `data/${election_name}_data/${area}_${category}`
    data = await set_post_data(url)
    current_string = json_list_to_html_table(JSON.stringify(data), "Votes by gender")
    return_string += current_string
    
    category = categories[3]
    url = `data/${election_name}_data/${area}_${category}`
    data = await set_post_data(url)
    current_string = json_list_to_html_table(JSON.stringify(data), "Votes by racial group")
    return_string += current_string

    category = categories[4]
    url = `data/${election_name}_data/${area}_${category}`
    data = await set_post_data(url)
    current_string = json_list_to_html_table(JSON.stringify(data), "Actual election results")
    return_string += current_string

    return return_string
}




//this program converts a json list to html, given input json and the table title
function json_list_to_html_table(input, title) {
    //parse the json
    input = JSON.parse(input)
    let return_string = "";
    //create the div for the title 
    const div_text= `<div class="table_title">${title}</div>`; //class is table title 
    return_string += div_text //appending to the return string

    // Create the table element
    let table = "<table class=\"data_preview_table\">\n";
            
    // Get the keys (column names) of the first object in the JSON data
    let cols;
    try {
        cols = Object.keys(input[0]);
    } catch(e) {
        return "" //return empty if exception
    }
    
    
    // Create the header elements
    let thead = "<thead>\n";
    let tr = "<tr>\n";

    // Loop through the column names and create header cells
    for(let i = 0; i < cols.length; i++) {
        const item = cols[i];
        let th = `<th>${item}</th>\n`;
        tr+=th; // Append the header cell to the header row
    }
    //append closing tags
    tr+="</tr>\n"
    thead+=tr;
    thead+="</thead>\n"; // Append the header row to the header
    table+=thead // Append the header to the table

    
    //create the table body 
    let body = "<tbody>\n"
    for(let i = 0; i < input.length; i++) {
        let tr = "<tr>";
        for(let key in input[i]) {
            const value = input[i][key];
            let td = `<td>${value}</td>\n`;
            tr+=td
        }
        tr+="</tr>\n"
        //append this row to body
        body+=tr
    }

    //append the closing tags
    body+="</tbody>\n";
    table+=body;
    table+="</table>\n";

    return_string += table; //appending entire table to the return string  
    return return_string
}   