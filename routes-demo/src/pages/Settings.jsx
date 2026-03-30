import React from "react";
import { useParams } from 'react-router-dom'; 

function Settings() {
    const { name } = useParams();  

  return (
    <>
      <h1>{name},This is the Settings</h1>
    </>
  );
}

export default Settings;