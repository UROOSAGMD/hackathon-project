import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase/firebase";

export default function StudentForm() {
  const [data, setData] = useState({
    name: "",
    roll: "",
    course: "",
    skills: "",
  });

  const saveStudent = async () => {
    await addDoc(collection(db, "students"), data);
    alert("Student Added");
  };

  return (
    <div className="container">
      <h2>Add Student</h2>

      <input placeholder="Full Name" onChange={(e) => setData({ ...data, name: e.target.value })} />
      <input placeholder="Roll No" onChange={(e) => setData({ ...data, roll: e.target.value })} />
      <input placeholder="Course" onChange={(e) => setData({ ...data, course: e.target.value })} />
      <input placeholder="Skills" onChange={(e) => setData({ ...data, skills: e.target.value })} />
      <input placeholder="Student Name" />
      <input placeholder="Registration ID" />
      <input placeholder="Program" />
      <input placeholder="Expertise" />
      <button onClick={saveStudent}>Save</button>
    </div>
  );
}
