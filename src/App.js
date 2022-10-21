import React from "react";
import { Route, Routes } from "react-router-dom";
import RequireUser from "./Components/RequireUser";
import { url } from "./config";
import AddStudent from "./Pages/AddStudent";
import DeleteStudent from "./Pages/DeleteStudent";
import EditStudent from "./Pages/EditStudent";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Students from "./Pages/Students";
import Teachers from "./Pages/Teachers";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <RequireUser>
              <Home />
            </RequireUser>
          }
        >
          <Route path="students" element={<Students />} />
          <Route path="students/add" element={<AddStudent />} />
          <Route path="students/edit" element={<EditStudent />} />
          <Route path="students/delete" element={<DeleteStudent />} />
          <Route path="teachers" element={<Teachers />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
