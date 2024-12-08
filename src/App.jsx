import "bootstrap/dist/css/bootstrap.min.css"
import 'react-calendar/dist/Calendar.css';

import { Grid } from "@mui/material"
import SignInPage from "./components/SignInPage"
import { Route, Routes } from "react-router-dom"
import EmsDashboard from "./components/dashBoard"
import DashPage from "./components/DashPage"
import AddEmployee from "./components/AddEmployee"
import UpdateEmployee from "./components/UpdateEmployee";
import RemoveEmployee from "./components/RemoveEmployee";
import ViewEmployees from "./components/ViewEmployee";
function App() {
  return (
    <Grid container>
      <Grid item sm={12}>
        <Routes>
          <Route path="/" element={<SignInPage />}></Route>
          <Route path="/dashboard" element={<EmsDashboard />}>
            <Route path="dashPage" element={<DashPage />} />
            <Route path="addEmp" element={<AddEmployee />} />
            <Route path="updateEmp" element={<UpdateEmployee />} />
            <Route path="removeEmp" element={<RemoveEmployee />} />
            <Route path="viewEmp" element={<ViewEmployees/>} />
          </Route>
        </Routes>
      </Grid>
    </Grid>
  )
}

export default App
