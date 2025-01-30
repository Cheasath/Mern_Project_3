import React from "react";
import "../Styles/studentTable.css";

const StudentTable = ({ students, deleteStudent, editStudent }) => {
  return (
    <div className="student-table">
      <h2>Student List</h2>
      {students.length === 0 ? (
        <p>No students added yet.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Group</th>
              <th>Course</th>
              <th>Instructor</th>
              <th>Progress</th>
              <th>Grade</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => (
              <tr key={index}>
                <td>{student.name}</td>
                <td>{student.group}</td>
                <td>{student.course}</td>
                <td>{student.instructor}</td>
                <td>{student.progress}</td>
                <td>{student.grade}</td>
                <td>
                  <button onClick={() => editStudent(index)}>Edit</button>
                  <button onClick={() => deleteStudent(index)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default StudentTable;
