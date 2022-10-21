import React, { useState } from "react";

function Student({
  name,
  age,
  address,
  className,
  contactNumber,
  subjects,
  id,
  gender,
}) {
  const [subjectsIsOpen, setSubjectsIsOpen] = useState(false);

  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{age}</td>
      <td>{gender}</td>
      <td>{address}</td>
      <td>{className}</td>
      <td>{contactNumber}</td>
      <td onClick={() => setSubjectsIsOpen((e) => !e)} className="subjects-td">
        <ul className={`subjects${subjectsIsOpen ? " active" : ""}`}>
          <li>
            <span>المادة</span>
            <span>السعر</span>
          </li>
          {subjects.map((sub) => (
            <li key={sub.id}>
              <span>{sub.name}</span>
              <span>{sub.price}</span>
            </li>
          ))}
        </ul>
      </td>
      <td>
        <button>add</button>
        <button>add</button>
        <button>add</button>
      </td>
    </tr>
  );
}

export default Student;
