//program to return a json file once particular csv is requested
const fs = require("fs");
const { parse } = require("csv-parse");
//this js file is mainly for the cleaning of data and the conversion of csv files to html tables
export default function csv_to_html(path, container) { //arguments: csv file path, container id to append to 
    //first, convert the result to an easily iterable JSON format
    const data = [];
    console.log("running");
    fs.createReadStream("./../data/2016_presidential_data/national_actual.csv")
    .pipe(
        parse({
        delimiter: ",",
        columns: true,
        ltrim: true,
        })
    )
    .on("data", function (row) {
        // This will push the object row into the array
        data.push(row);
    })
    .on("error", function (error) {
        console.log(error.message);
    })
    .on("end", function () {
        // Here log the result array
        console.log("parsed csv data:");
        console.log(data);
    });
}

