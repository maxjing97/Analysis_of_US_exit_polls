import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import set_post_data from "./../client";
import get_election_tables from "./../data_format";

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
    console.log("election selected", curr_election_selected)
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


//react class to show the data for the election selected
class ShowData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text:"<div></div>"
    };
    //binding since select_option() sets state
    this.updatetext = this.updatetext.bind(this);
  }

  updatetext() {
    //trigger the callback to get the data after the component mounted
    const election_name = String(this.props.election).toLowerCase() //get this from the prop, and make this lowercase
    get_election_tables("2016_presidential", election_name).then(table_text => {
      this.setState({
        text: table_text //calls function to load the relevant tables in html format for this data
      }) 
    })

  }


  render() {
    
    if(this.props.election !== "None") { //if the option selected not none
      this.updatetext()
      return (
        <div className = "election-data">
          <h2>{this.props.election} election results and exit polls</h2>
          
          <div id="table-summary" dangerouslySetInnerHTML={{__html: this.state.text}}></div> 
        </div>
      );
    }
  }
}

export default function render_2016_presidential() {
  ReactDOM.createRoot(document.getElementById('content')).render(<MainStarting/>);
}