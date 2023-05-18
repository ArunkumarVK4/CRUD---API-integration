import { Button } from "@mui/material";
import React from "react";
import { useHistory } from 'react-router-dom';

function Home() {
    const history = useHistory()
  return (
    <div style={{margin:"50px"}}>
        <h1>WELCOME TO ADMIN DASHBOARD</h1>
      <Button variant="contained"
      style={{margin:"50px"}}
      onClick={()=>history.push(`/staffs`)}
      >STAFF DASHBOARD</Button>
      <Button variant="contained" 
      onClick={()=>history.push("/student")}>STUDENT DASHBOARD</Button>
     
    </div>
  );
}

export default Home;
