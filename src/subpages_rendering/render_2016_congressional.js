import React from 'react';
import StrictMode from "react";
import ReactDOM from 'react-dom/client';


//render results and data analysis of the 2016 congressional election, connecting its own specialized js file that renders 
// text and data visualizations using the corresponding webscraped data

//main class to be rendered 
class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    
    
    render() {
      return (
        <h1>2016 congressional election results compared to predicted results based on the exit polls</h1>
      )
    };
};


export default function render_2016_congressional() {
    const root = ReactDOM.createRoot(document.getElementById('content'));
    const element = <Main/>;
    root.render(element);
}