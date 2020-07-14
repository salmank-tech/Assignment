import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Student, Country } from "src/app/models/Student";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  students: Student[];
  isEdit: boolean;
  editId: number;
  studentForm: FormGroup;
  submitted: boolean;
  country: Country[];
  message: string = "";

  constructor(public route: Router) {}

  ngOnInit() {
    this.country = [
      { value: "Pakistan", description: "Pakistan" },
      { value: "India", description: "India" },
      { value: "Australia", description: "Australia" },
      { value: "Newzeland", description: "Newzeland" },
      { value: "Canada", description: "Canada" },
    ];
    this.submitted = false;
    this.students = [
      {
        id: 1,
        name: "Ismu",
        email: "ismu@yahoo.com",
        country: "Pakistan",
        status: false,
        gender: "Male",
      },
      {
        id: 2,
        name: "Salman",
        email: "salman@yahoo.com",
        country: "Australia",
        status: true,
        gender: "Male",
      },
      {
        id: 3,
        name: "Anum",
        email: "anum@yahoo.com",
        country: "Pakistan",
        status: true,
        gender: "Female",
      },
      {
        id: 4,
        name: "khan",
        email: "khan@yahoo.com",
        country: "India",
        status: false,
        gender: "Male",
      },
      {
        id: 5,
        name: "Hasham",
        email: "hasham@yahoo.com",
        country: "Australia",
        status: true,
        gender: "Male",
      },
    ];
    this.studentForm = new FormGroup({
      name: new FormControl("", [Validators.required]),
      password: new FormControl("", [
        Validators.required,
        Validators.minLength(6),
      ]),
      // email: new FormControl("", [Validators.required, Validators.email]),
      // country: new FormControl("", [Validators.required]),
      // status: new FormControl(true),
      // gender: new FormControl("Male"),
    });
  }

  submit() {
    const form = this.studentForm.value;
    console.log(this.studentForm.value);
    if (this.studentForm.valid) {
      if (
        this.studentForm.value.name.toLowerCase() === "salman" &&
        this.studentForm.value.password.toLowerCase() === "123456"
      ) {
        this.message = "Login Successfully!";
        this.route.navigate(["/home"]);
      } else {
        this.message = "Invalid Username & Password";
      }
      // if (this.isEdit) {
      //   const index: number = this.students.findIndex(
      //     (data) => data.id == this.editId
      //   );
      //   if (index !== -1) {
      //     this.students[index] = {
      //       ...this.students[index],
      //       name: form.name,
      //       email: form.email,
      //       country: form.country,
      //       status: form.status,
      //       gender: form.gender,
      //     };
      //   }
      // } else {
      //   this.students.push({
      //     id: this.students.length + 1,
      //     name: form.name,
      //     email: form.email,
      //     country: form.country,
      //     status: form.status,
      //     gender: form.gender,
      //   });
      // }
      // this.studentForm.reset();
      // this.studentForm.controls.status.setValue(true);
      // this.studentForm.controls.gender.setValue("Male");
      // this.isEdit = false;
      // this.editId = 0;
      // console.log(this.students);
    }
  }

  edit(data: Student) {
    this.isEdit = true;
    this.editId = data.id;
    this.studentForm.patchValue(data);
  }
}
