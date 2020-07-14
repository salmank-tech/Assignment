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
  studentForm: FormGroup;
  country: Country[];
  message: string = "";

  constructor(public route: Router) {}

  ngOnInit() {
    this.studentForm = new FormGroup({
      name: new FormControl("", [Validators.required]),
      password: new FormControl("", [
        Validators.required,
        Validators.minLength(6),
      ]),
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
    }
  }
}
