 import { getDocs, collection } from "firebase/firestore";
import { db } from "../firebase/firebase";
import { useEffect, useState } from "react";

export default function StudentDetails() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const snapshot = await getDocs(collection(db, "students"));
      setStudents(snapshot.docs.map(doc => doc.data()));
    };
    getData();
  }, []);

  return (
    <div className="students-wrapper">
      <h2>Students</h2>

      <div className="students-grid">
        {students.map((s, i) => (
          <div className="details-box" key={i}>
            <p><b>Name:</b> {s.name}</p>
            <p><b>Roll:</b> {s.roll}</p>
            <p><b>Course:</b> {s.course}</p>
            <p><b>Skills:</b> {s.skills}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

 
