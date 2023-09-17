// Implement a class named HolbertonCourse
export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') {
      throw TypeError('Name must be a string');
    }
    if (typeof length !== 'number') {
      throw TypeError('Length must be a number');
    }
    if (!Array.isArray(students)) {
      throw TypeError('Students must be an array of strings');
    }

    this._name = name;
    this._length = length;
    this._students = students;
  }

  // Implement a getter for the attribute name
  get name() {
    return this._name;
  }

  // Implement a getter for the attribute length
  get length() {
    return this._length;
  }

  // Implement a getter for the attribute students
  get students() {
    return this._students;
  }

  // Implement a setter for the attribute name
  set name(name) {
    if (typeof name !== 'string') {
      throw TypeError('Name must be a string');
    }
    this._name = name;
  }

  // Implement a setter for the attribute length
  set length(length) {
    if (typeof length !== 'number') {
      throw TypeError('Length must be a number');
    }
    this._length = length;
  }

  // Implement a setter for the attribute students
  set students(students) {
    if (!Array.isArray(students)) {
      throw TypeError('Students must be an array of strings');
    }
    this._students = students;
  }
}
