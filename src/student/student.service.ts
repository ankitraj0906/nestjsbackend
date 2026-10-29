import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class StudentService {
  private students = [
    { id: 1, name: 'Ankit', age: 20 },
    { id: 2, name: 'Jane Smith', age: 22 },
    { id: 3, name: 'gulshan', age: 23 },
  ];

  getAllStudents() {
    return this.students;
  }
  getStudentById(id: number) {
    const student = this.students.find((s) => s.id === id);
    if (!student)
      throw new NotFoundException(`Student with ID ${id} not found`);

    return student;
  }

  //POST
  createStudent(data: { name: string; age: number }) {
    const newStudent = { id: Date.now(), ...data };
    this.students.push(newStudent);
    return newStudent;
  }

  //PUT
  updateStudent(id: number, data: { name: string; age: number }) {
    const studentIndex = this.students.findIndex((s) => s.id === id);
    if (studentIndex === -1)
      throw new NotFoundException(`Student with ID ${id} not found`);

    this.students[studentIndex] = { id, ...data };
    return this.students[studentIndex];
  }

  //PATCH
  patchStudent(id: number, data: Partial<{ name: string; age: number }>) {
    const studentIndex = this.getStudentById(id);
    Object.assign(studentIndex, data);
    return studentIndex;
  }

  //DELETE
  deleteStudent(id: number) {
    const studentIndex = this.students.findIndex((s) => s.id === id);
    if (studentIndex === -1)
      throw new NotFoundException(`Student with ID ${id} not found`);
    const deletedStudent = this.students.splice(studentIndex, 1);
    return {
      message: `Student with ID ${id} deleted successfully`,
      deletedStudent,
    };
  }
}
