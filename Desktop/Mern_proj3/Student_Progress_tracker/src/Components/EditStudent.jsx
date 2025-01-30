import React, { useState } from "react";
import axios from "axios";
import "../Styles/editStudent.css";

const EditStudent = ({ student, onClose, onUpdate }) => {
  const [name, setName] = useState(student.name);
  const [group, setGroup] = useState(student.group);
  const [course, setCourse] = useState(student.course);
  const [progressStatus, setProgressStatus] = useState(student.progressStatus);

  const handleSave = () => {
    const updatedStudent = { ...student, name, group, course, progressStatus };

    axios.put(`http://localhost:5000/students/${student._id}`, updatedStudent)
      .then((res) => {
        onUpdate(res.data);
        onClose();
      });
  };

  return (
    <div className="edit-student">
      <h2>Edit Student</h2>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <input type="text" value={group} onChange={(e) => setGroup(e.target.value)} />
      <input type="text" value={course} onChange={(e) => setCourse(e.target.value)} />
      <select value={progressStatus} onChange={(e) => setProgressStatus(e.target.value)}>
        <option value="On Track">On Track</option>
        <option value="At Risk">At Risk</option>
        <option value="Behind">Behind</option>
      </select>
      <button onClick={handleSave}>Save</button>
      <button onClick={onClose}>Cancel</button>
    </div>
  );
};

export default EditStudent;
