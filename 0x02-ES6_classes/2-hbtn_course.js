class HolbertonCourse:
    def __init__(self, name, length, students):
        self._name = None
        self._length = None
        self._students = None
        self.name = name
        self.length = length
        self.students = students
        
    @property
    def name(self):
        return self._name
    
    @name.setter
    def name(self, value):
        if isinstance(value, str):
            self._name = value
        else:
            raise TypeError("name attribute must be a string")
    
    @property
    def length(self):
        return self._length
    
    @length.setter
    def length(self, value):
        if isinstance(value, int):
            self._length = value
        else:
            raise TypeError("length attribute must be an integer")
    
    @property
    def students(self):
        return self._students
    
    @students.setter
    def students(self, value):
        if isinstance(value, list) and all(isinstance(x, str) for x in value):
            self._students = value
        else:
            raise TypeError("students attribute must be a list of strings")
