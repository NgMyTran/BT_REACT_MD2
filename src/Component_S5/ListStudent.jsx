import React from "react";

export default function ListStutudent({
  listStudent,
  handleEdit,
  handleDelete,
  handleDisplay,
}) {
  return (
    <table>
      <thead>
        <tr>
          <th>NO</th>
          <th>Mã sinh viên</th>
          <th>Tên sinh viên</th>
          <th>Tuổi</th>
          <th>Giới tính</th>
          <th>Hành động</th>
        </tr>
      </thead>
      {listStudent?.map((student, index) => (
        <tbody key={student.studentID}>
          <tr>
            <td>{index + 1}</td>
            <td>{student.mssv}</td>
            <td>{student.studentName}</td>
            <td>{student.age}</td>
            <td>{student.sexual}</td>
            <td>
              <button
                id="btn-watch-student"
                onClick={() => handleDisplay(student.studentID)}
              >
                Xem
              </button>
              <button id="btn-edit-student" onClick={() => handleEdit(student)}>
                Sua
              </button>
              <button
                id="btn-delete-student"
                type="button"
                onClick={() => handleDelete(student.studentID)}
              >
                Xoa
              </button>
            </td>
          </tr>
        </tbody>
      ))}
    </table>
  );
}
