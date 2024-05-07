import React from "react";
import { useState } from "react";
import "./App.scss";
// import Test from "./Test";

// import "./App.css";
// import Header from "./Component_TH1_S3.jsx/ElonMusk.jsx";
// import Button from "./Button.jsx";
// import ListItem from "./Component_TH1_S3.jsx/ElonMusk.jsx";
// import ListSong from "./Component_TH1_S3.jsx/BT15_s3_song.jsx/ListSong.jsx";
// import InputSong from "./Component_TH1_S3.jsx/BT15_s3_song.jsx/InputSong.jsx";
// import FormBMI from "./BMI.jsx";
// import ToDoList from "./ToDo.jsx/ToDoList.jsx";
// import MapToDo from "./ToDo.jsx/MapToDoList.jsx";
import ListStudent from "./Component_S5/ListStudent";
import StudentInfor from "./Component_S5/StudentInfor";
import SearchStudent from "./Component_S5/Searchstudent";
import EditeStudentInfor from "./Component_S5/EditStudentInfor";
export default function App() {
  // let a = 5;

  //TH3_S3
  // const [count, setCount] = useState(0);

  // const handleIncrease = () => {
  //   setCount(count + 1);
  // };
  // const handleDecrease = () => {
  //   setCount(count - 1);
  //   // if (count>0) setCount(count-1)
  //   // else setCount(0)
  // };

  //TH5_S3
  // const [userName, setUserName] = useState("");
  // const [pass, setPass] = useState("");
  // const userNameChange = (event) => {
  //   setUserName(event.target.value);
  //   console.log(userName);
  // };
  // const passChange = (event) => {
  //   setPass(event.target.value);
  //   console.log(pass);
  // };
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   alert("Success!");
  // };

  //TH6_S3
  // const [info, setInfo] = useState({
  //   number: "",
  //   array: [],
  //   total: 0,
  // });
  // const handleInputNumber = (event) => {
  //   setInfo({ ...info, number: event.target.value });
  // };
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   setInfo({
  //     array: [...info.array, parseInt(info.number)],
  //     number: "",
  //     total: info.total + parseInt(info.number),
  //   });
  // };

  //TH7_s3
  // const [format, setFormat] = useState({
  //   color: "black",
  //   isShow: true,
  //   fontSize: 16,
  //   content: "hello :v!",
  // });
  // const handleChange = () => {
  //   setFormat({
  //     ...format,
  //     color: format.color === "black" ? "pink" : "black",
  //     fontSize: format.fontSize === 16 ? 20 : 16,
  //     content:
  //       format.content === "hello :v!" ? "u look so great!" : "hello :v!",
  //   });
  // };
  // const handleToggle = () => {
  //   setFormat({
  //     ...format,
  //     isShow: !format.isShow,
  //   });
  // };

  //BT14_s3
  // const [p, setP] = useState("Sport");
  // const chooseSport = () => {
  //   setP("Sport");
  // };
  // const chooseCulture = () => {
  //   setP("Culture");
  // };
  // const chooseScience = () => {
  //   setP("Science");
  // };

  //BT14_s3
  // const [songs, setSongs] = useState([]);
  // const addSongToList = (event) => {
  //   event.preventDefault();
  //   const newSong = {
  //     id: songs.length + 1,
  //     songName: event.target[0].value,
  //   };
  //   // console.log(newSong, "bbb");
  //   setSongs([...songs, newSong]);
  //   event.target.reset();
  // };
  // const handleRemoveSong = (id) => {
  //   setSongs(songs.filter((el) => el.id !== id));
  // };

  //BT16_s3
  // const [height, setHeight] = useState("");
  // console.log(height);

  // const [m, setM] = useState("");
  // const [result, setResult] = useState("");
  // const [bmimessage, setBmiMessage] = useState("");

  // const handleHeight = (event) => {
  //   console.log(event.target.value);
  //   setHeight(event.target.value);
  //   console.log(height);
  // };
  // const handleM = (event) => {
  //   setM(event.target.value);
  //   console.log(m);
  // };
  // const handleEnter = () => {
  //   console.log("sss");
  //   const bmi = (m / (height * height)).toFixed(2);
  //   setResult(bmi);

  //   if (bmi < 18.5) {
  //     setBmiMessage("Gầy");
  //   } else if (bmi >= 18.5 && bmi < 25) {
  //     setBmiMessage("Bình thường");
  //   } else if (bmi >= 25 && bmi < 30) {
  //     setBmiMessage("Thừa cân");
  //   } else {
  //     setBmiMessage("Béo phì");
  //   }
  // };

  //ReactJS – HACKATHON 03
  const [todos, setTodos] = useState([]);
  // const [toDoName, setToDoName] = useState("");
  const [countWork, setCount] = useState(0);
  const addWork = (event) => {
    event.preventDefault();
    const newWork = {
      id: todos.length + 1,
      toDoName: event.target[0].value,
    };
    setTodos([...todos, newWork]);
    event.target.reset();
  };
  const handleRemoveWork = (id) => {
    setTodos(todos.filter((el) => el.id !== id));
  };
  // const [products, setProducts] = useState([]);
  const [products, setProducts] = useState([
    { id: 1, name: "Product 1", price: 10 },
    { id: 2, name: "Product 2", price: 20 },
    { id: 3, name: "Product 3", price: 30 },
  ]);

  //BT11_s5
  // const [erorrInput, setErorrInput] = useState("");
  const [toggleAdd, setToggleAdd] = useState(false);
  const handleToggleAdd = () => {
    setToggleAdd(true);
    setToggleEdit(false);
  };

  const [students, setStudents] = useState(
    JSON.parse(localStorage.getItem("students")) || []
  );
  const addStudentToList = (event) => {
    event.preventDefault();
    // if (erorrInput === "") {
    //   ("You have to fill the information and then submit");
    // } else {
    const newStudent = {
      studentID: Math.floor(Math.random() * 1000),
      mssv: event.target[0].value,
      studentName: event.target[1].value,
      age: event.target[2].value,
      sexual: event.target[3].value,
      birth: event.target[4].value,
      birthPlace: event.target[5].value,
      address: event.target[6].value,
    };
    setStudents([...students, newStudent]);
    localStorage.setItem("students", JSON.stringify([...students, newStudent]));
    alert("Add sutdent success");
    event.target.reset();
    // }
  };

  const viewStudent = (id) => {
    const indexDisplay = students.findIndex(
      (student) => student.studentID == id
    );
    alert(`Xem thong tin sinh vien:
  Mssv: ${students[indexDisplay].mssv}
  Ten hoc sinh: ${students[indexDisplay].studentName}
  Tuoi: ${students[indexDisplay].age}
  Gioi tinh: ${students[indexDisplay].sexual}
  Ngay sinh: ${students[indexDisplay].birth}
  Noi sinh:${students[indexDisplay].birthPlace}
  Dia chi: ${students[indexDisplay].address}
  `);
  };

  const handleRemove = (id) => {
    const studentDelete = students.find((student) => student.studentID == id);
    console.log(studentDelete);
    if (
      window.confirm(
        `Do you want to delete ${studentDelete.studentName}'s information?`
      )
    ) {
      const indexDelete = students.findIndex(
        (student) => student.studentID == id
      );
      students.splice(indexDelete, 1);
      setStudents([...students]);
    }
    localStorage.setItem("students", JSON.stringify([...students]));
  };

  const [student, setStudent] = useState(
    JSON.parse(localStorage.getItem("studentEdit")) || {}
  );

  const [toggleEdit, setToggleEdit] = useState(false);
  const editStudent = (student) => {
    setToggleAdd(false);
    setToggleEdit(true);
    localStorage.setItem("studentEdit", JSON.stringify(student));
    setStudent(student);
  };

  console.log(student);
  const saveEdited = (event) => {
    event.preventDefault();
    const indexStudent = students.findIndex(
      (ele) => ele.studentID == student.studentID
    );
    // student[indexStudent].id = student.id;
    console.log(indexStudent, "index");
    students[indexStudent].mssv = event.target[0].value;
    students[indexStudent].studentName = event.target[1].value;
    students[indexStudent].age = event.target[2].value;
    students[indexStudent].sexual = event.target[3].value;
    students[indexStudent].birth = event.target[4].value;
    students[indexStudent].birthPlace = event.target[5].value;
    students[indexStudent].address = event.target[6].value;
    setStudents([...students]);
    localStorage.setItem("students", JSON.stringify([...students]));
    setToggleEdit(false);
    event.target.reset();
  };

  return (
    <>
      {/* <div>
        comApp value a: {a}
      <Test
        number={a}
        number2={a + 5}
        obj={{ id: 1, name: "Tran" }}
        arr={[1, 2, 3]}
      ></Test>
        
        <h1>COURSE LIST</h1>
        <nav>
          <li>HTML</li>
          <li>Javascript</li>
          <li>Python</li>
          <li>C#</li>
        </nav>
      </div> */}
      TH3_S3
      {/* <span>
        <Button
          background="green"
          color="white"
          text="Increase"
          onClick={handleIncrease}
        />
        <h2>{count}</h2>
        <Button
          background="red"
          color="white"
          text="Decrease"
          onClick={handleDecrease}
          disabled={count === 0}
        />
      </span> */}
      TH5_S3
      {/* <div>
        <form onSubmit={handleSubmit}>
          <label>User Name</label>
          <input
            type="text"
            id="userName"
            placeholder="Input name"
            value={userName}
            onChange={userNameChange}
          />

          <label>Password</label>
          <input
            type="password"
            id="password"
            placeholder="Input password"
            value={pass}
            onChange={passChange}
          />
          <Button text="Submit" />
        </form>
      </div> */}
      TH6_S3
      {/* <div>
        <form onSubmit={handleSubmit}>
          <input
            type="number"
            value={info.number}
            onChange={handleInputNumber}
          />
          <button type="submit">Add</button>
        </form>
        <div>Sum of {info.array.join("+") + "=" + info.total}</div>
      </div> */}
      TH7_s3
      {/* <div>
        {format.isShow ? (
          <>
            <p style={{ color: format.color, fontSize: format.fontSize }}>
              {format.content}
            </p>
            <button onClick={handleChange}>Change</button>
          </>
        ) : (
          ""
        )}
        <button onClick={handleToggle}>Toggle</button>
      </div> */}
      BT14_s3
      {/* <div>
        <button onClick={chooseSport}>Sport</button>
        <button onClick={chooseCulture}>Culture</button>
        <button onClick={chooseScience}>Science</button>
        <p>{p}</p>
      </div> */}
      BT15_s3
      {/* <div id="listSong">
        {songList.map((ele) => (
          <div key={ele.id}>{ele.name}</div>
        ))}
        <InputSong addSongToList={addSongToList} />
        <ListSong songs={songs} handleDelete={handleRemoveSong} />
      </div> */}
      BT16_s3
      {/* <div>
        <FormBMI
          handleSubmit={handleEnter}
          height={height}
          m={m}
          handleHeight={handleHeight}
          handleM={handleM}
        />
        <p>Your weigth is: {result}</p>
        <p>Message: {bmimessage}</p>
      </div> */}
      BT11_s5
      <div>
        <SearchStudent onClick={handleToggleAdd} />
        <div id="div-table-form-student">
          <div>
            <ListStudent
              listStudent={students}
              handleDisplay={viewStudent}
              handleDelete={handleRemove}
              handleEdit={editStudent}
            />
          </div>
          {toggleAdd === true && <StudentInfor addStudent={addStudentToList} />}
          {toggleEdit && (
            <EditeStudentInfor
              student={student}
              handleSubmitEdited={saveEdited}
            />
          )}
        </div>
      </div>
    </>
  );
}
