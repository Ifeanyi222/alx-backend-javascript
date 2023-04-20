export default class HolbertonCourse {
    consructor(name, length, students) {
        if not isinstance(name, str):
            raise TypeError("Name must be a string")
        if not isinstance(length, (int, float)):
            raise TypeError("Length must be a number")
        if not isinstance(students, list) or not all(isinstance(s, str) for s in students):
            raise TypeError("Students must be a list of strings")
	
	this._name = name;
        this._length = length;
        this._students = students;
       }
       
       get name() {
	 return this.name;
       }
       set name(name) {
        if not isinstance(name, str):
            raise TypeError("Name must be a string")
        this._name = name;
       }

       get length() {
        return this._length;
       }

       set length(length) {
        if not isinstance(length, (int, float)):
            raise TypeError("Length must be a number")
        this._length = length;
       }

       get students() {
        return this._students;
       }

       set students(students) {
        if not isinstance(students, list) or not all(isinstance(s, str) for s in students):
            raise TypeError("Students must be a list of strings")
        this._students = students;
       }
}
