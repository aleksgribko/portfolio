import React, { useState } from 'react';
import AllInfo from './components/AllInfo.js'
import Contacts from './components/Contacts.js'
import Projects from './components/Projects.js'
import ScrollElement from './components/ScrollElement.js'
import LayerInfo from './components/LayerInfo.js'
//import ProjectGrid from './components/ProjectGrid.js'
import $ from "jquery";

import './css/App.css';

function App() { 

  // cool colors #FF003C #4ea1fd #890506

  let [cardName, setCardName] = useState(null)
  //let [vh, setVh] = useState(window.innerHeight * 0.01)

  //window.addEventListener('resize', () => {
  //  setVh(window.innerHeight * 0.01)
  //})
  function handleClickAway() {
    $('.mainFull').addClass("mainCut")
    $(".mainCut").removeClass("mainFull")
    $("#blackLayer").css("display", "none");
  }

  function switchLayer(name) {
    setCardName(name)
  }

  //  useEffect(() => {
  //    document.documentElement.style.setProperty('--vh', `${vh}px`);
  //  })
  
  
  return (
    <div className="App" id="mainPagesFlow">
      <Contacts />
      <div id="project0back"></div>
      <div id='project0' className='flex'>
        <LayerInfo
          getBackIndentificator={switchLayer}
          cardName={cardName}
        />
        <AllInfo
          switchLayer={switchLayer}
          cardName={cardName}
        />
      </div>     
      <Projects />
      <ScrollElement />
      <div onClick={() => handleClickAway()} id='blackLayer'></div>  
    </div>
  );
}

export default App;
