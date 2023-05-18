import React, { useEffect, useState } from "react";
import AppPro from "../UseContext/AppProvider";
import {
  useHistory,
  useParams,
} from "react-router-dom/cjs/react-router-dom.min";
import { Button, TextField } from "@mui/material";
import Base from "../Base/Base";
import axios from "axios";
import { BASEURL } from "./../StudentComponents/BaseUrl";

function EditStaff() {
  const { setStaffs } = AppPro();
  const { id } = useParams();

  const history = useHistory();

  const [preData, setPreData] = useState({
    id: "",
    name: "",
    gender: "",
    subject: "",
    qualification: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setPreData({ ...preData, [name]: value });
  };

  useEffect(() => {
    async function apiCall() {
      const data = await axios.get(`${BASEURL}/staff`);
      setPreData(data.data[id]);
    }
    apiCall();
  }, [id]);

  async function editStaff() {
    await axios.put(`${BASEURL}/staff/${preData.id}`, preData);
    apiCall();
    history.push("/staffs");
  }

  async function apiCall() {
    const data = await axios.get(`${BASEURL}/staff`);
    setStaffs(data.data);
  }

  return (
    <Base>
      <div>
        <Button variant="contained" onClick={() => history.push("/addStaff")}>
          ADD STAFF
        </Button>

        <Button
          variant="contained"
          onClick={() => history.push("/staffs")}
          style={{ marginLeft: "20px" }}
        >
          STAFF DASHBOARD
        </Button>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "80%",
          margin: "0 auto",
          marginTop: "10%",
        }}
      >
        <TextField
          id="filled-basic"
          variant="filled"
          className="m-3"
          value={preData.name}
          name="name"
          onChange={handleChange}
        />

        <TextField
          id="filled-basic"
          variant="filled"
          className="m-3"
          value={preData.gender}
          name="gender"
          onChange={handleChange}
        />

        <TextField
          id="filled-basic"
          variant="filled"
          className="m-3"
          value={preData.subject}
          name="subject"
          onChange={handleChange}
        />

        <TextField
          id="filled-basic"
          variant="filled"
          className="m-3"
          value={preData.qualification}
          name="qualification"
          onChange={handleChange}
        />

        <Button variant="contained" className="m-5" onClick={editStaff}>
          UPDATE STAFF
        </Button>
      </div>
    </Base>
  );
}

export default EditStaff;
