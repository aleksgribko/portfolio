import React, { useState, useEffect } from 'react';
import AllInfo from './components/AllInfo.js'
import Contacts from './components/Contacts.js'
import Projects from './components/Projects.js'
import ScrollElement from './components/ScrollElement.js'
import LayerInfo from './components/LayerInfo.js'
import styled from 'styled-components'
import $ from 'jquery'

import './css/App.css';

function App() {  

// cool colors #FF003C #4ea1fd #890506

let [identificator, setIdentificator] = useState(null)
let [cardName, setCardName] = useState(null)

  function switchLayer(identify, name){
    setIdentificator(identify)
    setCardName(name)
  }
    
  return (
    <div className="App" id="mainPagesFlow">  
               
          <Contacts />       
      <div id="project0back"></div>
      <div id='project0' className='flex'> 
        
          <LayerInfo 
            identificator = {identificator}
            getBackIndentificator = {switchLayer}
            cardName= {cardName}
          />   
        
                             
          <AllInfo 
            switchLayer={switchLayer}
            cardName= {cardName}
          />  
            
       </div>  
       <Projects /> 
       <ScrollElement />
       <div id='blackLayer'></div>
    </div>
  );
}

export default App;


//<div>Icons made by <a href="https://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/"           title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/"           title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>