import React from "react";

export default function StudentInfor({ addStudent }) {
  return (
    <>
      <form id="studentForm" onSubmit={addStudent}>
        <h3>Them moi sinh vien</h3>

        <div className="div-label-input-student">
          <label>MSSV</label>
          <input type="text" placeholder="Nhap MSSV" />
          {/* <p>{erorr}</p> */}
        </div>

        <div className="div-label-input-student">
          <label>Ten sinh vien</label>
          <input type="text" placeholder="Nhap ten" />
          {/* <p>{erorr}</p> */}
        </div>

        <div className="div-label-input-student">
          <label>Tuoi</label>
          <input type="number" placeholder="Tuoi" />
          {/* <p>{erorr}</p> */}
        </div>

        <div className="div-label-input-student">
          <label>Gioi tinh</label>
          <input type="text" placeholder="Nam" />
          {/* <p>{erorr}</p> */}
        </div>

        <div className="div-label-input-student">
          <label>Ngay sinh</label>
          <input
            style={{ width: "166px" }}
            type="date"
            placeholder="dd/mm/yyyy"
          />
          {/* <p>{erorr}</p> */}
        </div>

        <div className="div-label-input-student">
          <label>Noi sinh</label>
          <input type="text" placeholder="HCM" />
          {/* <p>{erorr}</p> */}
        </div>

        <div className="div-label-input-student">
          <label>Dia chi</label>
          <input type="text" />
          {/* <p>{erorr}</p> */}
        </div>

        <button type="submit" id="btn-submit">
          Submit
        </button>
      </form>
    </>
  );
}
