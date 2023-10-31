namespace Subjects { 
    export class Subject {
      _teacher: Teacher | undefined;
  
      setTeacher(teacher: Teacher): void {
        this._teacher = teacher;
      }
    }
  }
  