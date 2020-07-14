import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Student, Country } from "src/app/models/Student";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-detail-view",
  templateUrl: "./detail-view.component.html",
  styleUrls: ["./detail-view.component.scss"],
})
export class DetailViewComponent implements OnInit {
  student: Student;

  constructor(public route: Router, public activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe((res: any) => {
      this.student = res;
    });
  }
}
