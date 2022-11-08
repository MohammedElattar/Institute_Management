import React from "react";

function AddStudent() {
  return (
    <div className="student-form-container">
      <h3>اضافة طالب</h3>
      <form>
        <div className="input">
          <label htmlFor="name">الاسم</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="input">
          <label htmlFor="age">السن</label>
          <input type="number" id="age" name="age" required />
        </div>
        <div className="input">
          <label htmlFor="address">مكان الاقامة</label>

          <input type="text" name="address" id="address" required />
        </div>
        <div className="wrapper">
          <div className="input">
            <label htmlFor="gender">النوع</label>
            <select name="gender" id="gender" required>
              <option value="male">ذكر</option>
              <option value="female">انثي</option>
            </select>
          </div>
          <div className="input">
            <label htmlFor="class">الصف الدراسي</label>
            <select name="class" id="class" required>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
            </select>
          </div>
        </div>
        <div className="input">
          <label htmlFor="contactNumber">رقم التواصل</label>
          <input type="text" id="contactNumber" name="contactNumber" required />
        </div>
        <button type="submit" className="main-btn">
          اضافة
        </button>
      </form>
    </div>
  );
}

export default AddStudent;
