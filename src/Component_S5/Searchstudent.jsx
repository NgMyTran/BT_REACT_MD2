import React from "react";

export default function SearchStudent({ onClick, handleSubmit }) {
  return (
    <>
      <div className="search-student">
        <button onClick={() => onClick()}>Thêm mới sinh viên</button>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Tìm kiếm tên" className="search" />
          <button>Tìm kiếm</button>
        </form>
        <button>Sắp xếp</button>
      </div>
    </>
  );
}
