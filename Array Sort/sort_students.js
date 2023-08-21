function sortStudents(students) {
  students.sort((a, b) => {
    if (a.graduated && !b.graduated) {
      return -1; // a comes before b (graduated before non-graduated)
    }
    if (!a.graduated && b.graduated) {
      return 1; // b comes before a (graduated before non-graduated)
    }
    // If both are graduated or both are non-graduated, sort by grade in descending order
    return b.grade - a.grade;
  });
}

module.exports = sortStudents;
