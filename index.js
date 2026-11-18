import { Student } from './Student.js';

const students = [
  new Student("Сидоров А.А.", 0, false, 3),
  new Student("Кузнецова М.В.", 2, true, 6)
];

students[0].show();
students[1].show();