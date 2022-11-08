import React, { useState } from "react";
function DeleteStudent() {
  const [loading, setLoading] = useState(false);
  return (
    <div className="student-form-container">
      <h3>ازالة طالب</h3>
      <form>
        <div className="input">
          <label htmlFor="id">الرقم التعريفي</label>
          <input type="number" id="id" name="id" required />
        </div>
        <button type="submit" className="main-btn">
          ازالة
        </button>
      </form>
    </div>
  );
}

export default DeleteStudent;
