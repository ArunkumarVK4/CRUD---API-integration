import { Switch,Route } from "react-router-dom";
import "./App.css"
import Student from './StudentComponents/Student';
import AddStud from './StudentComponents/AddStud';
import EditStudent from './StudentComponents/EditStudent';
import { Staff } from "./Staff Components/Staff";
import { AddStaff } from "./Staff Components/AddStaff";
import Home from "./Home";
import EditStaff from "./Staff Components/EditStaff";



function App() {
  return (
    <div className="App">
     <Switch>
        {/* HONE page */}
        <Route exact path="/">
          <Home/>
        </Route>

        <Route exact path="/student">
         <Student/>

        </Route>
        {/* ADD STUDENTS */}
        <Route path="/addStudent">
          <AddStud />
        </Route>
        {/* EDIT STUDENTS */}
        <Route path="/editStudent/:id">
          <EditStudent />
        </Route>
        {/* STAFF DASHBOARD */}
        <Route path="/staffs">
          <Staff />
        </Route>

        <Route path="/addStaff">
          <AddStaff/>
        </Route>

        <Route path="/edit/:id">
          <EditStaff/>
        </Route>

      </Switch>
    </div>
  );
}

export default App;



