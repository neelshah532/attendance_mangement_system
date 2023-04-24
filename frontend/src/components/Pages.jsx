import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import Home from "../pages/Home";
import AddSubject from "../components/AddSubject";
import AddStudent from "../components/AddStudent";
import AddTeacher from "../components/AddTeacher";
import UpdateTeacher from "../components/UpdateTeacher";
import Manage from "../components/Manage";
import ManageSubject from "../components/ManageSubject";
import ViewStudent from "../components/ViewStudent";
import ViewTeacher from "../components/ViewTeacher";
import SelectStudentDetails from "../components/SelectStudentsDetails"
import UpdateStudent from "../components/UpdateStudent"
import SelectDetailsQueries from "../components/SelectDetailsQueries"
import ViewQueries from "../components/ViewQueries"
import SelectDetailAttendance from "../components/SelectDetailAttendance"
import ViewAttendance from "../components/ViewAttendance"

function Pages() {
  return (
    <>
      <Routes>
        <Route exact path={"/Login"} element={<Login />} />
        <Route exact path={"/"} element={<Home />} />
        <Route exact path={"/AddSubject"} element={<AddSubject />} />
        <Route exact path={"/AddStudent"} element={<AddStudent />} />
        <Route exact path={"/UpdateTeacher"} element={<UpdateTeacher />} />
        <Route exact path={"/AddTeacher"} element={<AddTeacher />} />
        <Route exact path={"/Manage"} element={<Manage />} />
        <Route exact path={"/ManageSubject"} element={<ManageSubject />} />
        <Route exact path={"/ViewStudent"} element={<ViewStudent />} />
        <Route exact path={"/ViewTeacher"} element={<ViewTeacher />} />
        <Route exact path={"/SelectDetails"} element={<SelectStudentDetails />} />
        <Route exact path={"/UpdateStudent"} element={<UpdateStudent />} />
        <Route exact path={"/SelectDetailsQueries"} element={<SelectDetailsQueries />} />
        <Route exact path={"/ViewQueries"} element={<ViewQueries />} />
        <Route exact path={"/SelectDetailAttendance"} element={<SelectDetailAttendance />} />
        <Route exact path={"/ViewAttendance"} element={<ViewAttendance />} />
      </Routes>
    </>
  );
}

export default Pages;
