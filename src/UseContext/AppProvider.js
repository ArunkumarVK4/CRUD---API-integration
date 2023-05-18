import React, { useContext, useEffect } from 'react'
import { useState,createContext } from 'react';
import axios from "axios";

import { BASEURL } from './../StudentComponents/BaseUrl';



const studCtx = createContext(null);

export function AppProvider({children}) {
    
    const [students, setStudents] = useState([]);
    const [name, setName] = useState("");
    const [gender, setGender] = useState("");
    const [sub1, setSub1] = useState("");
    const [sub2, setSub2] = useState("");
    const [sub3, setSub3] = useState("");
    const [staffs, setStaffs] = useState([]);
    const [staffsName, setStaffsName] = useState("");
    const [staffsGender, setStaffsGender] = useState("");
    const [staffSubject, setStaffSubject] = useState("");
    const [staffQualification, setsStaffQualification] = useState("");

 useEffect(()=>{
  const apiCall = async ()=>{
    const data =await axios.get(`${BASEURL}/user`)
    setStudents(data.data)
    // console.log(data.data);
    const sData = await axios.get(`${BASEURL}/staff`)
    setStaffs(sData.data)
  }
  apiCall()
 },[])
  return (
    <div>
    <studCtx.Provider  
    value={{students,setStudents,name,setName,gender,setGender,sub1,setSub1,sub2,setSub2,sub3,setSub3,staffs,setStaffs,staffsName,setStaffsName,staffsGender,setStaffsGender,staffSubject,setStaffSubject,staffQualification,setsStaffQualification}}
    >
        {children}
    </studCtx.Provider>
    </div>
  )
}
export default function AppPro(){
    return useContext(studCtx)
};


