import './index.css';
import reportWebVitals from './reportWebVitals';
//import render_functions for all elections
//-----congressional elections to render
import render_2016_presidential from './subpages_rendering/render_2016_presidential'; 

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

//making so options are shown by the dropdown menu when clicking, by adding a click event listener to all buttons
const dropdowns = document.querySelectorAll(".dropdown") //get the element
dropdowns.forEach(dropdown => {
  dropdown.addEventListener('click', e => {
    const dropdown_content = dropdown.querySelectorAll(".dropdown-content"); 
    dropdown_content.forEach(dropdown_content_item => {
      //reverse the style 
      let current_style = dropdown_content_item.style.display;
      if (current_style === "flex") {
        dropdown_content_item.setAttribute("style", "display:none;");
      } else {
        dropdown_content_item.setAttribute("style", "display:flex;");
      }

      //also hide if clicked outside the dropdown content or the button
      document.addEventListener("click", e => {
        if(!dropdown_content_item.contains(e.target) && !dropdown.contains(e.target)) {
          dropdown_content_item.setAttribute("style", "display:none;");
        }
      })
    });
  });
});

//adding onclick functions to all the elections represented by a unique id
let  current_election = document.getElementById("2016_pres") //get the element
//get the corresponding render function from the render js file for this particular election
current_election.addEventListener("click", (e) => {
  //call the function to render the content section
  
  render_2016_presidential();
})

