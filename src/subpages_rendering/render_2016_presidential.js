import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';

//render results and data analysis of the 2016 congressional election, connecting its own specialized js file that renders 
// text and data visualizations using the corresponding webscraped data

//main class to be rendered, allows users to select different levels of elections 
class MainStarting extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        election_selected:"None"
      };
    //binding since select_option() sets state
    this.select_option = this.select_option.bind(this);
  }
  
  //function called when the non-none option is not called
  select_option(event){
    //saves the election name selected
    const curr_election_selected = event.target.value;
    this.setState({
      election_selected: curr_election_selected
    });
  }
  
  render() {
    return (
      <div id="rendered_content">
        <h2>2016 Presidential Election results and exit polls</h2>
        <h4>select an area (National or state level)</h4>
        <select name="elections" className="select_election"  onChange={this.select_option}>
            <option value="None">None</option>
            <option value="National">National</option>
          <optgroup label="State Level Elections">
            <option value="Michigan">Michigan</option>
            <option value="Ohio">Ohio</option>
            <option value="Pennsylvania">Pennsylvania</option>
            <option value="Wisconsin">Wisconsin</option>
          </optgroup>
        </select>
        <section id="data-content">
          <ShowData election={this.state.election_selected}></ShowData>
        </section>
      </div>
    )
  };
};

//test calling the backend
async function getData() {
  const response = await fetch('http://localhost:4000/users');
  const body = await response.json();
  if (response.status !== 200) {
    throw Error(body.message) 
  }
  return body;
};

//react function to show the data for the election selected
function ShowData(props) {
  if(props.election !== "None") { //if the option selected is none
  const lower_case_name = String(props.election).toLowerCase(); //find the lower case name of election area, used to find the correct data to display
  
    let data = getData()
    console.log(getData())

    // fetching the GET route from the Express server which matches the GET route from server.js

  
  return (
    <div class = "election-data">
      <h2>{props.election} election results and exit polls</h2>
      <p>{data}</p>
      <section id="table-summary"></section>
    </div>
  );
  }
}

export default function render_2016_presidential() {
  ReactDOM.createRoot(document.getElementById('content')).render(<MainStarting/>);
}