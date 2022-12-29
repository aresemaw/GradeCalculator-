import React, { useState } from 'react';
import GradeTable from './GradeTable';
import './custom.scss';

const GradeCalculator = () => {
  const [overallGrade, setOverallGrade] = useState('');
  const [assignments, setAssignments] = useState([]);

  const calculateOverallGrade = () => {
    const total = assignments.reduce(
      (acc, assignment) =>
        acc + parseInt(assignment.grade) * parseInt(assignment.weight),
      0
    );
    const average = total / assignments.reduce((acc, assignment) => acc + parseInt(assignment.weight), 0);
    setOverallGrade(average);
  };

  return (
    <div>
   
      <GradeTable assignments={assignments} setAssignments={setAssignments} />
      <br></br>
      <button type="button" className='button' onClick={calculateOverallGrade}>
        Calculate overall grade
      </button>
      <p>Overall grade: {overallGrade}</p>
    </div>
  );
};

export default GradeCalculator;
