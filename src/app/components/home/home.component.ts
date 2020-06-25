import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  email: string;
  password: string;
  isRemember: boolean;
  emailPlaceholder: string;
  passwordPlaceholder: string;

  constructor() {}

  ngOnInit() {
    this.isRemember = false;
    this.emailPlaceholder = "Enter Email";
    this.passwordPlaceholder = "Password";
  }

  submit() {
    alert(
      `Email: ${this.email} 
       Password: ${this.password} 
       Remembered: ${this.isRemember}`
    );
    console.log(
      `Email: ${this.email}Password: ${this.password}Remembered: ${this.isRemember}`
    );
  }
}
