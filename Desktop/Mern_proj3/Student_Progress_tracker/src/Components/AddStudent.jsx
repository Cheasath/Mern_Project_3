import React, { useState } from "react";
import "../Styles/addStudent.css";

const AddStudent = ({ addStudent }) => {
  const [name, setName] = useState("");
  const [group, setGroup] = useState("");
  const [course, setCourse] = useState("");
  const [instructor, setInstructor] = useState("");
  const [progress, setProgress] = useState("");
  const [grade, setGrade] = useState(""); // New field for Grade

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !group || !course || !instructor || !progress || !grade) {
      alert("Please fill in all fields!");
      return;
    }

    addStudent({ name, group, course, instructor, progress, grade });

    // Clear fields after submission
    setName("");
    setGroup("");
    setCourse("");
    setInstructor("");
    setProgress("");
    setGrade("");
  };

  return (
    <div className="add-student">
      <h2>Add Student</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Student Name" value={name} onChange={(e) => setName(e.target.value)} required />
        <input type="text" placeholder="Group" value={group} onChange={(e) => setGroup(e.target.value)} required />
        <input type="text" placeholder="Course" value={course} onChange={(e) => setCourse(e.target.value)} required />
        <input type="text" placeholder="Instructor" value={instructor} onChange={(e) => setInstructor(e.target.value)} required />
        <select value={progress} onChange={(e) => setProgress(e.target.value)} required>
          <option value="">Select Progress</option>
          <option value="On Track">On Track</option>
          <option value="At Risk">At Risk</option>
          <option value="Behind">Behind</option>
        </select>
        <select value={grade} onChange={(e) => setGrade(e.target.value)} required>
          <option value="">Select Grade</option>
          <option value="A">A</option>
          <option value="B">B</option>
          <option value="C">C</option>
          <option value="D">D</option>
          <option value="F">F</option>
        </select>
        <button type="submit">Add Student</button>
      </form>
    </div>
  );
};

export default AddStudent;
