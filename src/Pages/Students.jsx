import React, { useState } from "react";
import { Link } from "react-router-dom";
import Student from "../Components/Student";
import { students } from "../data";

const Students = () => {
  const [search, setSearch] = useState("");

  const filtred = students.filter((e) => e.name.includes(search));

  return (
    <div className="students">
      <div className="btn-container">
        <Link to="/students/add" className="main-btn">
          اضافة طالب
        </Link>
        <Link to="/students/edit" className="main-btn">
          تعديل طالب
        </Link>
        <Link to="/students/delete" className="main-btn">
          ازالة طالب
        </Link>
      </div>
      <div className="search">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="بحث"
        />
      </div>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <td>#</td>
              <td>الاسم</td>
              <td>السن</td>
              <td>الجنس</td>
              <td>مكان الاقامة</td>
              <td>الصف الدراسي</td>
              <td>رقم التواصل</td>
              <td>المواد الدراسية</td>
              <td>الرسوم الدراسية</td>
              <td>المزيد</td>
            </tr>
          </thead>
          <tbody>
            {filtred.map((student) => (
              <Student key={student.id} {...student} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Students;
