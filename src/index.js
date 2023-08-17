import './index.css';
import reportWebVitals from './reportWebVitals';
//import render_functions for all elections
//-----congressional elections to render
import render_2016_congressional from './subpages_rendering/render_2016_congressional'; 

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


//adding onclick functions to all the elections represented by a unique id
const current_element = document.getElementById("2016_con") //get the element
//get the corresponding render function from the render js file for this particular election
current_element.addEventListener("click", (e) => {
  //call the function to render the content section
  
  render_2016_congressional();
})