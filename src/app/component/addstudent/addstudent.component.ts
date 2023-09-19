import { ReturnStatement } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.component.html',
  styleUrls: ['./addstudent.component.css'],
})
export class AddstudentComponent {
  studentName: string = '';
  studentAge: number | string = '';

  login(e: Event) {
    e.preventDefault();
    // console.log(this.studentName);
    // console.log(this.studentAge);
  }
  //name lenght (validate name)
  get isStudentNameValid() {
    return this.studentName.length >= 3;
  }
  //empty
  get isStudentNameEmpty() {
    return this.studentName.length == 0;
  }
  //validate Age
  get isStudentAgeValid() {
    return Number(this.studentAge) >= 18;
  }
  get isStudentAgeEmpty() {
    return this.studentAge == "";
  }
  //add
  studentList: { studentName: string; studentAge: number | string }[] = [];
  addStudent() {
    console.log(this.studentName);
    console.log(this.studentAge);
    //check
    if(this.studentAge == "" || this.studentName == "")return 
    for (const student of this.studentList) {
      if (student.studentName == this.studentName) {
        if (student.studentAge == this.studentAge)
          return;
      }
    }

    this.studentList.push({
      studentName: this.studentName,
      studentAge: this.studentAge,
    });
    this.studentName = '';
    this.studentAge = '';
    console.log(this.studentList);
  }
  //remove
  removeStudent(i: number) {
    this.studentList = this.studentList.filter((studen, index) => {
      return index != i;
    });
  }
}
