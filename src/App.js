import React from 'react';
import Photo from './components/Photo.js'
import Name from './components/Name.js'
import AllInfo from './components/AllInfo.js'
import Contacts from './components/Contacts.js'
import HelloInfo from './components/HelloInfo.js'
import Projects from './components/Projects.js'
import ScrollElement from './components/ScrollElement.js'
import './css/App.css';

function App() {  

  return (
    <div className="App">  
      <div className='flex navbar'>       
          <Name />
          <Contacts />       
       </div> 
      <div id='project0' className='flex'>                
          <div>
            <Photo />
            <HelloInfo />  
           </div>     
          <AllInfo />          
       </div>  
       <Projects /> 
       <ScrollElement />
    </div>
  );
}

export default App;


//<div>Icons made by <a href="https://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/"           title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/"           title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>