// Implement a class named Airport

export default class Airport {
  constructor(name, code) {
    if (typeof name !== 'string') {
      throw TypeError('Name must be a string');
    }
    if (typeof code !== 'string') {
      throw TypeError('Code must be a string');
    }
    this._name = name;
    this._code = code;
  }

  // Implement a getter named name
  get name() {
    return this._name;
  }

  // Implement a setter named name
  set name(name) {
    if (typeof name !== 'string') {
      throw TypeError('Name must be a string');
    }
    this._name = name;
  }

  // Implement a getter named code
  get code() {
    return this._code;
  }

  // Implement a setter named code
  set code(code) {
    if (typeof code !== 'string') {
      throw TypeError('Code must be a string');
    }
    this._code = code;
  }

  // Implement a method named [print] that returns [NAME (CODE)]
  toString() {
    return `[object ${this._code}]`;
  }
}
