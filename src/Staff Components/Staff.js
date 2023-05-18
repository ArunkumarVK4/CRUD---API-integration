
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { green } from "@mui/material/colors";
import AppPro from "../UseContext/AppProvider";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Base from "../Base/Base";
import axios from "axios";
import { BASEURL } from './../StudentComponents/BaseUrl';

export function Staff() {
  const { staffs,setStaffs,staffsName,setStaffsName,staffsGender,setStaffsGender,staffSubject,setStaffSubject,staffQualification,setsStaffQualification } = AppPro();

  const history = useHistory()

 async function deleteStaff(index) {
   await axios.delete(`${BASEURL}/staff/${index}`)
   apiCall()
  }
 
 async function apiCall(){
   const data = await axios.get(`${BASEURL}/staff`)
   setStaffs(data.data)
  }

  // async function apiCall() {
  //   const data = await axios.get(`${BASEURL}/staff`);
  //   setStaffs(data.data);
  // }
  
  return (
    <Base>
    <div>
      <Button variant="contained" onClick={()=>history.push("/addStaff")}>ADD STAFF</Button>

      <div>
        <div className="row">
          {/* Card Details */}
          {staffs.map((e, idx) => (
            <div className="col-xl-3 col-sm-6" key={e.id}>
              <Card sx={{ maxWidth: 200, margin: 5, backgroundColor: green }}>
                <CardContent sx={{ padding: 3, backgroundColor: "" }}>
                  <Typography gutterBottom variant="h5" component="div">
                    {e.name}
                  </Typography>
                  <hr />
                  <Typography variant="body2" color="text.secondary">
                    Gender: {e.gender}
                  </Typography>

                  <Typography variant="body2" color="text.secondary">
                    Subject : {e.subject}
                  </Typography>

                  <Typography variant="body2" color="text.secondary">
                    Qualification : {e.qualification}
                  </Typography>
                </CardContent>
                <hr />
                <CardActions>
                  {/* Edit Button */}
                  <Button
                    type="Button"
                    className="btn btn-primary mr-5"
                    variant="contained"
                     onClick={() => history.push(`/edit/${idx}`)}
                    
                  >
                    EDIT
                  </Button>
                  {/* Delete Button */}
                  <Button
                    type="Button"
                    className="btn btn-danger"
                    variant="contained"
                    onClick={() => deleteStaff(e.id)}
                  >
                    DELETE
                  </Button>
                </CardActions>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
    </Base>
  );
}
