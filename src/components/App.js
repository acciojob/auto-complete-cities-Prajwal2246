import React, { useState } from "react";
import "./../styles/App.css";
import AutoComplete from "./AutoComplete"

const App = () => {
   const indianCities = [
    "Mumbai",
    "Delhi",
    "Bengaluru",
    "Chennai",
    "Hyderabad",
    "Kolkata",
    "Pune",
    "Ahmedabad",
    "Jaipur",
    "Chandigarh",
    "Lucknow",
    "Indore",
    "Bhopal",
    "Patna",
    "Ranchi",
    "Bhubaneswar",
    "Cuttack",
    "Guwahati",
    "Shillong",
    "Imphal",
    "Agartala",
    "Aizawl",
    "Itanagar",
    "Kohima",
    "Gangtok",
    "Panaji",
    "Thiruvananthapuram",
    "Kochi",
    "Coimbatore",
    "Madurai",
    "Tiruchirappalli",
    "Salem",
    "Vellore",
    "Noida",
    "Ghaziabad",
    "Faridabad",
    "Gurugram",
    "Meerut",
    "Amritsar",
    "Ludhiana",
    "Jalandhar",
    "Shimla",
    "Dehradun",
    "Haridwar",
    "Roorkee",
    "Udaipur",
    "Jodhpur",
    "Kota",
    "Ajmer",
    "Alwar",
    "Bikaner",
  ];

  const [input, setInput] = useState("");
  return (
    <div>
      {/* Do not remove the main div */}
      <h3>Search cities of India</h3>
      <AutoComplete suggestions={indianCities}/>
    </div>
  );
};

export default App;
