import { useState } from "react";
import Nav from "./components/nav/Nav";
import Meeting from "./components/meeting/Meeting";

function App() {
 
  const [formData, setFormData] = useState();

  function joinSubmittedHandler(data){
    setFormData(prevForm => {
      return {
        ...prevForm,
        data
      }
    });

    console.log(formData);
  }

  return <>
    { !formData && <Nav onJoinSubmitted={joinSubmittedHandler} /> }
    { formData && <Meeting data={formData} /> }
    
  </>;
}

export default App;
