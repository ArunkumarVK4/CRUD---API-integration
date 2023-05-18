import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import AppPro from "../UseContext/AppProvider";
import Base from "../Base/Base";
import { Button } from "@mui/material";
import axios from "axios";
import { BASEURL} from "./BaseUrl"

function EditStudent() {
  const history = useHistory();

  const {
    students,
    setStudents,
    name,
    setName,
    gender,
    setGender,
    sub1,
    setSub1,
    sub2,
    setSub2,
    sub3,
    setSub3,
  } = AppPro();

  // ADD STUDENT BUTTON
  function addStud(){
    setName("")
    setGender("")
    setSub1("")
    setSub2("")
    setSub3("")
    history.push("/addStudent")
  }  
  
  const { id } = useParams();

  const handleChange = ({ target: { name, value } })=>{
    setPreData((preData) => ({ ...preData, [name]: value }));
  }

  

  const [preData,setPreData] = useState({
    id: '',
    name:'',
    gender:'',
    english:'',
    maths:'',
    physics:''
  })

  useEffect(()=>{
   async function apiCall(){
    const {data} =  await axios.get(`${BASEURL}/user`)
    console.log(data[id]);
    setPreData(data[id])
   }
   apiCall()
  }, [id])


  async function handleSubmit(e){
    e.preventDefault();
    await axios.put(`${BASEURL}/user/${preData.id}`, preData);
    apiCall()
    history.push("/student")
  }

  async function apiCall(){
    const data = await axios.get(`${BASEURL}/user`)
    setStudents(data.data)
  }
  return (
    <Base>
      <div>
        <div style={{margin:"20px"}}>
          <Button variant="contained" onClick={() => history.push("/student")}>
            STUDENT DASHBOARD
          </Button>

          <Button variant="contained"
          style={{marginLeft:"50px"}}
          onClick={addStud}>
            ADD STUDENT
          </Button>
        </div>
        <h3 style={{ margin: "40px" }}>EDIT STUDENT</h3>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "60%",
            margin: "0 auto",
          }}
        >
          {/* Name Input */}
          <input
            style={{
              marginBottom: "20px",
              borderRadius: "10px",
              height: "2rem",
              padding: "5px",
            }}
            type="text"
            placeholder="Enter name"
            value={preData.name}
            name="name"
            onChange={handleChange}
          />
          {/* Gender Input */}
          <input
            style={{
              marginBottom: "20px",
              borderRadius: "10px",
              height: "2rem",
              padding: "5px",
            }}
            type="text"
            placeholder="Enter Gender"
            value={preData.gender}
            name="gender"
            onChange={handleChange}
          />
          {/* Sub1 Input */}
          <input
            style={{
              marginBottom: "20px",
              borderRadius: "10px",
              height: "2rem",
              padding: "5px",
            }}
            type="number"
            placeholder="Enter ENGLISH MARK"
            value={preData.english}
            name="english"
            onChange={handleChange}
          />
          {/* Sub2 Input */}
          <input
            style={{
              marginBottom: "20px",
              borderRadius: "10px",
              height: "2rem",
              padding: "5px",
            }}
            type="number"
            name="maths"
            placeholder="Enter MATHS MARK"
            value={preData.maths}
            onChange={handleChange}
          />
          {/* Sub3 Input */}
          <input
            style={{
              marginBottom: "20px",
              borderRadius: "10px",
              height: "2rem",
              padding: "5px",
            }}
            type="number"
            name="physics"
            placeholder="Enter PHYSICS"
            value={preData.physics}
            onChange={handleChange}
          />{" "}
        </div>
        <br />
        <button type="button" className="btn btn-success" onClick={handleSubmit}>
          UPDATE STUDENT
        </button>
      </div>
    </Base>
  );
}

export default EditStudent;

