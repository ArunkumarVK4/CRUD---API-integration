import React from 'react'
import { useHistory } from 'react-router-dom'
import AppPro from '../UseContext/AppProvider'
import { Button } from '@mui/material';

function Base({children}) {
    const history = useHistory()
    const {setName,setGender,setSub1,setSub2,setSub3} = AppPro();

    function addStudent(){
      setName("")
      setGender("")
      setSub1("")
      setSub2("")
      setSub3("")
      history.push("/addStudent")
    }

  return (
    <div>
        {/* HOME BUTTON */}
        <Button variant='contained'
        style={{margin:"20px"}}
        onClick={()=>history.push("/")}>HOME</Button>

<div>
    {children}
</div>
    </div>
  )
}

export default Base