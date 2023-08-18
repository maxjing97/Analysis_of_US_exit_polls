import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';


//render results and data analysis of the 2016 congressional election, connecting its own specialized js file that renders 
// text and data visualizations using the corresponding webscraped data

//main class to be rendered, allows users to select different levels of elections 
class MainStarting extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        election_selected:"none"
      };
    //binding since select_option() sets state
    this.select_option = this.select_option.bind(this);
  }
  
  //function called when the non-none option is not called
  select_option(event){
    //saves the election name selected
    const curr_election_selected = event.target.value;
    console.log(curr_election_selected)
    this.setState({
      election_selected: curr_election_selected
    });
  }
  
  render() {
    return (
      <div id="rendered_content">
        <h2>2016 congressional election results compared to predicted results based on the exit polls</h2>
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
          {String(this.state.election_selected)}
        </section>
      </div>
    )
  };
};


export default function render_2016_presidential() {
  ReactDOM.createRoot(document.getElementById('content')).render(<MainStarting/>);
}