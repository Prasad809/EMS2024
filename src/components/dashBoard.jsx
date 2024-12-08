import { Divider, Grid } from "@mui/material";
import { NavLink, Outlet } from "react-router-dom";
import DateCalender from "../common-ui/calender";

function EmsDashboard() {
    return (
        <Grid container>
            <Grid item sm={12} className="shadow-lg p-3 mb-5 bg-body-tertiary rounded">
                <h1 className="heading sideHead">Employee Management System</h1><span><img src={''} /></span>
            </Grid>
            <Grid item sm={12} className="shadow-lg p-3 mb-5 bg-body-tertiary rounded">
                <Divider />
                <div className="row">
                    <div className="col-2">
                        <nav className="nav nav-pills flex-column" style={{ backgroundColor: "black" }}>
                            <NavLink to={'dashPage'} className={'list'}>Dashboard</NavLink>
                            <NavLink to={'addEmp'} className={'list'}>Add Employee</NavLink>
                            <NavLink to={'removeEmp'} className={'list'}>Remove Employee</NavLink>
                            <NavLink to={'updateEmp'} className={'list'}>Update Employee</NavLink>
                            <NavLink to={'viewEmp'} className={'list'}>View Employees</NavLink>
                            <NavLink to={'/'} className={'list'}>LogOut</NavLink>
                        </nav>
                    </div>
                    <div className="col-7">
                        <h1 align='center' className="mainHead">WELCOME TO ADMIN PORTAL</h1>
                        <Outlet />
                    </div>
                    <div className="col-3">
                        <DateCalender />
                    </div>
                </div>
            </Grid>
        </Grid>
    )
}
export default EmsDashboard;