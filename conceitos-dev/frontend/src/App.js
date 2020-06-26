import React, { useState } from 'react';

import Header from './components/Headers';

function App() {
const [projects, setProjects] = useState(['Dev de app', 'Front-End web']);

   function handleAddProject() {
      //projects.push(`New project ${Date.now()}`);
      setProjects([...projects, `New project ${Date.now()}`]);
   }

   return (
      <>
         <Header title="Projects" />
      
      <ul>
         {projects.map(project => <li key={project}>{project}</li>)}
      </ul>

      <button type="button" onClick={handleAddProject}>Adicionar projeto</button>
      </>
   );
}

export default App;