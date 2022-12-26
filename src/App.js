import Home from "./pages/Home";
import React from "react";
import  Key  from "react";
import Axios from "axios"
import './app.css'; 


function App() {
  var url = 'https://api.edamam.com/api/recipes/v2/recipe-finder?type=public&app_id=YOUR_APP_ID&app_key=YOUR_APP_KEY';

  async function getRecipes () {
    var result = await Axios.get(url);
    console.log(result.data)
  }

  return (
    <div className="app">
      <section id="menu-bar">
        <header id="logo" onClick={getRecipes}>On Hand Eats</header>
          <Home />
        </section> 
      </div>
  );
}

export default App;
