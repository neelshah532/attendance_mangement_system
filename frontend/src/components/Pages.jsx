import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import Home from "../pages/Home";
import AddProgram from "../components/AddProgram";
import AddSubject from "../components/AddSubject";
import AddStudent from "../components/AddStudent";
import AddTeacher from "../components/AddTeacher";
import UpdateTeacher from "../components/UpdateTeacher";
import Manage from "../components/Manage";
import ManagePrograme from "../components/ManagePrograme";
import ManageSubject from "../components/ManageSubject";
import ViewStudent from "../components/ViewStudent";
import ViewTeacher from "../components/ViewTeacher";

function Pages() {
  return (
    <>
      <Routes>
        <Route exact path={"/Login"} element={<Login />} />
        <Route exact path={"/"} element={<Home />} />
        <Route exact path={"/AddProgram"} element={<AddProgram />} />
        <Route exact path={"/AddSubject"} element={<AddSubject />} />
        <Route exact path={"/AddStudent"} element={<AddStudent />} />
        <Route exact path={"/UpdateTeacher"} element={<UpdateTeacher />} />
        <Route exact path={"/AddTeacher"} element={<AddTeacher />} />
        <Route exact path={"/Manage"} element={<Manage />} />
        <Route exact path={"/ManageSubject"} element={<ManageSubject />} />
        <Route exact path={"/ManagePrograme"} element={<ManagePrograme />} />
        <Route exact path={"/ViewStudent"} element={<ViewStudent />} />
        <Route exact path={"/ViewTeacher"} element={<ViewTeacher />} />
      </Routes>
    </>
  );
}

export default Pages;
