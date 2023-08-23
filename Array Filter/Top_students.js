function topStudents(array) {
    return array.filter(student => student.grade >= 90);
}

module.exports = topStudents;
