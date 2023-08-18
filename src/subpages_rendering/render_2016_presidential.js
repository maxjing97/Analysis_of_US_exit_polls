import React from 'react';
import ReactDOM from 'react-dom/client';


//render results and data analysis of the 2016 congressional election, connecting its own specialized js file that renders 
// text and data visualizations using the corresponding webscraped data

//main class to be rendered, allows users to select different levels of elections 
class MainStarting extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    
    
    render() {
      return (
        <div id="rendered_content">
          <h2>2016 congressional election results compared to predicted results based on the exit polls</h2>
          <h4>select an area (National or state level)</h4>
          <select name="elections" class="select_election">
              <option value="None">None</option>
              <option value="National">National</option>
            <optgroup label="State Level Elections">
              <option value="Michigan">Michigan</option>
              <option value="Ohio">Ohio</option>
              <option value="Pennsylvania">Pennsylvania</option>
              <option value="Wisconsin">Wisconsin</option>
            </optgroup>
          </select>
        </div>
      )
    };
};


export default function render_2016_presidential() {
    const root = ReactDOM.createRoot(document.getElementById('content'));
    const element = <MainStarting/>;
    root.render(element);
}