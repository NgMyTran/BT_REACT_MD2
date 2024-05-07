import React from "react";

export default function EditeStudentInfor({ student, handleSubmitEdited }) {
  console.log(student.studentID, "SSS");
  return (
    <>
      <div key={student.studentID}>
        <form id="studentForm" onSubmit={handleSubmitEdited}>
          <h3>Chinh sua sinh vien</h3>

          <div className="div-label-input-student">
            <label>MSSV</label>
            <input type="text" defaultValue={student.mssv} />
          </div>

          <div className="div-label-input-student">
            <label>Ten sinh vien</label>
            <input type="text" defaultValue={student.studentName} />
          </div>

          <div className="div-label-input-student">
            <label>Tuoi</label>
            <input type="number" defaultValue={student.age} />
          </div>

          <div className="div-label-input-student">
            <label>Gioi tinh</label>
            <input type="text" defaultValue={student.sexual} />
          </div>

          <div className="div-label-input-student">
            <label>Ngay sinh</label>
            <input
              style={{ width: "166px" }}
              type="date"
              defaultValue={student.birth}
            />
          </div>

          <div className="div-label-input-student">
            <label>Noi sinh</label>
            <input type="text" defaultValue={student.birthPlace} />
          </div>

          <div className="div-label-input-student">
            <label>Dia chi</label>
            <input type="text" defaultValue={student.address} />
          </div>

          <button type="submit" id="btn-submit">
            Edit
          </button>
        </form>
      </div>
    </>
  );
}
