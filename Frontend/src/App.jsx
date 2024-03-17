import CreateEmployee from "./Admin/CreateEmployee";
import Home from "./Admin/Home";
import Employee from "./Admin/Employee";
import Login from "./Pages/Login/Login";
import EditEmployee from "./Admin/EditEmployee"
import { Route, Routes } from "react-router";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/admin" element={<Home/>}/>
        <Route path="/admin/createEmployee" element={<CreateEmployee/>}/>
        <Route path="/admin/employee" element={<Employee/>}/>
        <Route path="/admin/employee/edit" element={<EditEmployee/>}/>
      </Routes>
    </>
  );
};

export default App;
