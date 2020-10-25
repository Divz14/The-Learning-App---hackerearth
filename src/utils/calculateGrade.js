const calculateGrade = score => {
  const percentage = parseInt(score);

  let grade = null;
  let remarks = null;

  if (percentage >= 90) {
    grade = 'O';
  } else if (percentage >= 80 && percentage <= 90) {
    grade = 'A';
  } else if (percentage >= 70 && percentage <= 80) {
    grade = 'B';
  } else if (percentage >= 60 && percentage <= 70) {
    grade = 'C';
  } else if (percentage < 60) {
    grade = 'D';
  }

  if (score >= 60) {
    remarks = 'Congratulations, YOU PASSED!';
  } else {
    remarks = 'Sorry, YOU FAILED!';
  }

  return {
    grade,
    remarks
  };
};

export { calculateGrade };
