import React from 'react';
import StrictMode from "react";
import ReactDOM from 'react-dom/client';

//render results and data analysis of the 2016 congressional election, connecting its own specialized js file that renders 
// text and data visualizations using the corresponding webscraped data

//main class to be rendered 
class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          p_style: {
            maxWidth: "700px",
            fontSize: "20px"
          }
        };
    }
    
    
    render() {
      return (
        <div id="rendered_content">
          <h1>About</h1>
          <p style={this.state.p_style}>
            This website compares the estimations of exit polls from CNN to the actual results of elections
            for the presidency and House of Representatives in the United States. Analysis is available for the results of the 
            entire country and the results of selected "key states" such as Michigan and Pennsylvania for the federal elections from
            2016-2022 that occur ever two years. 
            Overall, the exit polls are fairly accurate in their predictions. 
          </p>
        </div>
      )
    };
};


export default function render_about() {
    const root = ReactDOM.createRoot(document.getElementById('content'));
    const element = <Main/>;
    root.render(element);
}