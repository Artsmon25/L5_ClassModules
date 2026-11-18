import { Doctor } from './Doctor.js';

export class Student extends Doctor 
{
  
  constructor(name, experience, hasLicense, course) 
  {
    super(name, experience, hasLicense);
    this.course = course; 
  }

  get course() 
  {
    return this._course;
  }

  set course(value) 
  {
    if (value < 1 || value > 6) 
      {
      alert("Курс должен быть числом от 1 до 6");
      return;
    }
    this._course = value;
  }

  show() 
  {
    console.log(`Студент-медик: ${this.name}, Опыт: ${this.experience} лет, Лицензия: ${this.hasLicense}, Курс: ${this.course}`);
  }

  delete() 
  {
    super.delete(); 
    this._course = null; 
    console.log("Экземпляр студента удалён");
  }

  copy() 
  {
    return this;
  }

  static clone(student) 
  {
    return new Student(student.name, student.experience, student.hasLicense, student.course);
  }

  doWork() 
  {
    console.log(`${this.name} сейчас учится на ${this.course} курсе`);
  }
}