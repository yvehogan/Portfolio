import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';

import Homepage from './pages/Homepage.jsx';
import Projects from './pages/Projects.jsx';
import Resume from './pages/Resume.jsx';
import Experience from './pages/Experience.jsx';

function App() {
  return (
    <div>
    <BrowserRouter>	
    <Switch>
      <Route exact path='/Homepage'>

        <Homepage />

      </Route>    
    <Route exact path="/" component={Homepage}>
      </Route>

    <Route exact path='/Projects'>
        <Projects />
      </Route> 

       <Route exact path='/About'>
        <About />
      </Route> 

      <Route exact path='/Experience'> 
      <Experience /> 
       </Route>  

       <Route exact path='/Contact'> 
      <Contact /> 
       </Route>

       
       <Route exact path='/Resume'>
        <Resume />
      </Route> 

    </Switch>
		</BrowserRouter>
    </div>
  );
}

export default App;
