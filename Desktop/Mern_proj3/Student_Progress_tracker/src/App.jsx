import React, { useState } from "react";
import AddStudent from "./Components/AddStudent";
import StudentTable from "./Components/StudentTable";
import "./App.css";

const App = () => {
  const [students, setStudents] = useState([]);

  const addStudent = (student) => {
    setStudents([...students, student]);
  };

  const deleteStudent = (index) => {
    setStudents(students.filter((_, i) => i !== index));
  };

  const editStudent = (index) => {
    const studentToEdit = students[index];
    const newName = prompt("Edit Name", studentToEdit.name);
    const newGrade = prompt("Edit Grade", studentToEdit.grade);
    if (newName && newGrade) {
      const updatedStudents = [...students];
      updatedStudents[index] = { ...studentToEdit, name: newName, grade: newGrade };
      setStudents(updatedStudents);
    }
  };

  return (
    <div className="app">
      <h1>Student Progress Tracker</h1>
      <AddStudent addStudent={addStudent} />
      <StudentTable students={students} deleteStudent={deleteStudent} editStudent={editStudent} />
    </div>
  );
};

export default App;
